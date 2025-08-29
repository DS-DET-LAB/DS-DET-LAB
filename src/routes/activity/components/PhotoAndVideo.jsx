// @routes/activity/components/PhotoAndVideo.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as S from '@routes/activity/components/PhotoAndVideoStyle.js';

// API_KEY
const API_KEY = process.env.YOUTUBE_API_KEY || '';

// 로컬 SVG 아이콘
import Play from '@assets/icons/play.svg';
import Pause from '@assets/icons/pause.svg';

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

export default function PhotoAndVideo({
  playlist = 'https://www.youtube.com/watch?v=xnotNij9Qqc&list=PLaE7AG_TSWwsu4zmf7UBLuJWaruvr91Nn',
  pageSize = 9,
}) {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null); // videoId
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [pageToken, setPageToken] = useState('');
  const [nextToken, setNextToken] = useState(null);

  const playlistId = useMemo(() => getPlaylistId(playlist), [playlist]);

  // ▶ IFrame API 로더
  const [ytReady, setYtReady] = useState(!!window.YT?.Player);
  useEffect(() => {
    if (window.YT?.Player) {
      setYtReady(true);
      return;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => setYtReady(true);
  }, []);

  // 비디오별 플레이어 참조
  const playersRef = useRef({}); // { [videoId]: YT.Player }
  const attachPlayer = (vid) => {
    if (!ytReady || playersRef.current[vid]) return;
    playersRef.current[vid] = new window.YT.Player(`yt-${vid}`, {
      events: {
        onReady: () => {
          // 필요시 자동 음소거 재생:
          // e.target.mute(); e.target.playVideo();
        },
      },
    });
  };
  const play = (vid) => playersRef.current[vid]?.playVideo();
  const pause = (vid) => playersRef.current[vid]?.pauseVideo();

  // 데이터 불러오기
  useEffect(() => {
    if (!playlistId) {
      setErr('유효한 playlistId가 없습니다.');
      return;
    }
    if (!API_KEY) return; // 아래 폴백으로 대체
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

  // API 키 없으면 임베드 폴백
  if (!API_KEY) {
    return (
      <S.EmbedWrap>
        <iframe
          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
          title="YouTube playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <S.Note>.env에 YOUTUBE_API_KEY가 없어 임베드로 표시 중</S.Note>
      </S.EmbedWrap>
    );
  }

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

          const isSelected = selected === vid;

          return (
            <S.Card
              key={vid}
              $selected={isSelected}
              onClick={() => setSelected((cur) => (cur === vid ? null : vid))}
              title={title}
              aria-label={title}>
              {!isSelected ? (
                <>
                  <S.Thumb src={thumb} alt={title} />
                  <S.Title>{title}</S.Title>
                </>
              ) : (
                <S.PlayerWrapper>
                  <iframe
                    id={`yt-${vid}`}
                    src={`https://www.youtube.com/embed/${vid}?enablejsapi=1&controls=0&modestbranding=1&rel=0&playsinline=1&autoplay=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={() => attachPlayer(vid)}
                  />
                  {/* 커스텀 컨트롤: 재생/정지 (로컬 SVG) */}
                  <S.Controls onClick={(e) => e.stopPropagation()}>
                    <S.ControlBtn
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        play(vid);
                      }}
                      aria-label="재생">
                      <PlayIcon />
                    </S.ControlBtn>
                    <S.ControlBtn
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        pause(vid);
                      }}
                      aria-label="정지">
                      <PauseIcon />
                    </S.ControlBtn>
                  </S.Controls>
                </S.PlayerWrapper>
              )}
            </S.Card>
          );
        })}
      </S.Grid>

      <S.Pager>
        <S.IconBtn onClick={() => setPageToken('')} disabled={!pageToken} aria-label="이전">
          {/* 실제 svg 파일로 대체 */}
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
