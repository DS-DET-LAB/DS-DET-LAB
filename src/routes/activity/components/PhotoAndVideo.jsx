import React, { useEffect, useMemo, useState } from 'react';
import * as S from '@routes/activity/components/PhotoAndVideoStyle';

const API_KEY = import.meta.env.VITE_YT_API_KEY || '';

const getPlaylistId = (input) => {
  if (!input) return null;
  try {
    const u = new URL(input);
    return u.searchParams.get('list');
  } catch {
    return input;
  }
};

export default function PhotoAndVideo({
  playlist = 'https://www.youtube.com/watch?v=xnotNij9Qqc&list=PLaE7AG_TSWwsu4zmf7UBLuJWaruvr91Nn',
  pageSize = 9,
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [pageToken, setPageToken] = useState('');
  const [nextToken, setNextToken] = useState(null);

  const [zoomed, setZoomed] = useState(null); // 클릭 확대한 카드 videoId

  const playlistId = useMemo(() => getPlaylistId(playlist), [playlist]);

  // 썸네일 데이터만 불러옴
  useEffect(() => {
    if (!playlistId) {
      setErr('유효한 playlistId가 없습니다.');
      return;
    }
    if (!API_KEY) {
      setErr('API 키가 없습니다.');
      return;
    }
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${pageSize}&playlistId=${playlistId}&key=${API_KEY}${
        pageToken ? `&pageToken=${pageToken}` : ''
      }`,
    )
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error.message || 'YouTube API error');
        setItems(json.items || []);
        setNextToken(json.nextPageToken || null);
        setErr('');
      })
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, [playlistId, pageSize, pageToken]);

  return (
    <S.Wrap>
      <S.Grid>
        {(loading ? Array.from({ length: pageSize }) : items).map((it, idx) => {
          const sn = it?.snippet;
          const vid = sn?.resourceId?.videoId || `sk-${idx}`;
          const title = sn?.title || '';
          const thumb =
            sn?.thumbnails?.maxres?.url ||
            sn?.thumbnails?.high?.url ||
            sn?.thumbnails?.medium?.url ||
            sn?.thumbnails?.default?.url;

          const isZoomed = zoomed === vid;

          return (
            <S.Card
              key={vid}
              $zoomed={isZoomed}
              onClick={() => setZoomed(isZoomed ? null : vid)}
              title={title}
              aria-label={title}>
              <S.Thumb src={thumb} alt={title} />
              <S.Title>{title}</S.Title>
            </S.Card>
          );
        })}
      </S.Grid>

      <S.Pager>
        <S.IconBtn onClick={() => setPageToken('')} disabled={!pageToken} aria-label="이전">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.IconBtn>
        <S.IconBtn onClick={() => setPageToken(nextToken || '')} disabled={!nextToken} aria-label="다음">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </S.IconBtn>
      </S.Pager>

      {err && <S.ErrorMsg>{err}</S.ErrorMsg>}
    </S.Wrap>
  );
}
