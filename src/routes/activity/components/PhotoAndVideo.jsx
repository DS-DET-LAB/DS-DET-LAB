import React, { useEffect, useMemo, useState } from 'react';
import * as S from '@routes/activity/components/PhotoAndVideoStyle';
import Right20 from '@assets/activity/ic-right-20.svg';
import Left20 from '@assets/activity/ic-left-20.svg';

const API_KEY = import.meta.env.VITE_YT_API_KEY || '';

// URL 또는 ID에서 playlistId 추출
const getPlaylistId = (input) => {
  if (!input) return null;
  try {
    const u = new URL(input);
    return u.searchParams.get('list');
  } catch {
    return input; // 이미 ID일 수 있음
  }
};

// origin 파라미터 (IFrame Player 제어/자동재생 안정화)
const ORIGIN = typeof window !== 'undefined' ? `&origin=${encodeURIComponent(window.location.origin)}` : '';

export default function PhotoAndVideo({
  playlist = 'https://www.youtube.com/watch?v=xnotNij9Qqc&list=PLaE7AG_TSWwsu4zmf7UBLuJWaruvr91Nn',
  pageSize = 9,
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [pageToken, setPageToken] = useState('');
  const [nextToken, setNextToken] = useState(null);

  // 클릭 확장 상태
  const [expandedIdx, setExpandedIdx] = useState(null); // 숫자 인덱스
  const [expandedVid, setExpandedVid] = useState(null); // videoId

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

  // 페이지가 바뀌면 확장 상태 초기화
  useEffect(() => {
    setExpandedIdx(null);
    setExpandedVid(null);
  }, [pageToken]);

  // 클릭 핸들러: 같은 카드면 접기, 아니면 해당 위치로 확장
  const onCardClick = (idx, vid) => {
    if (expandedIdx === idx) {
      setExpandedIdx(null);
      setExpandedVid(null);
    } else {
      setExpandedIdx(idx);
      setExpandedVid(vid);
    }
  };

  // 그리드 아이템 + (선택 시) 확장행 삽입
  const children = [];
  const source = loading ? Array.from({ length: pageSize }) : items;

  source.forEach((it, idx) => {
    const sn = it?.snippet;
    const vid = sn?.resourceId?.videoId || `sk-${idx}`;
    const title = sn?.title || '';
    const thumb =
      sn?.thumbnails?.maxres?.url ||
      sn?.thumbnails?.high?.url ||
      sn?.thumbnails?.medium?.url ||
      sn?.thumbnails?.default?.url;

    children.push(
      <S.Card key={vid} onClick={() => onCardClick(idx, vid)} title={title} aria-label={title}>
        <S.Thumb src={thumb} alt={title} />
        <S.Title>{title}</S.Title>
      </S.Card>,
    );

    // 바로 아래에 확장 플레이어 행 삽입 (전체 열 span)
    if (expandedIdx === idx && expandedVid === vid) {
      children.push(
        <S.Expanded key={`exp-${vid}`}>
          <S.PlayerBox>
            <iframe
              // 자동재생 + 음소거(모바일 자동재생 보장) + origin
              src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1${ORIGIN}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </S.PlayerBox>
        </S.Expanded>,
      );
    }
  });

  return (
    <S.Wrap>
      <S.Grid>{children}</S.Grid>
      <S.Pager>
        <S.IconBtn onClick={() => setPageToken('')} disabled={!pageToken} aria-label="이전">
          <img src={Left20} alt="leftBtn"></img>
        </S.IconBtn>
        <S.IconBtn onClick={() => setPageToken(nextToken || '')} disabled={!nextToken} aria-label="다음">
          <img src={Right20} alt="rightBtn"></img>
        </S.IconBtn>
      </S.Pager>
      {err && <S.ErrorMsg>{err}</S.ErrorMsg>}
    </S.Wrap>
  );
}
