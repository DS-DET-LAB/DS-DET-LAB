/**
 * PhotoAndVideo
 * 유튜브 플레이리스트 썸네일 그리드/슬라이더 + 임베드 플레이어
 *
 * 동작
 * - 데스크톱/태블릿(≥768px): 그리드 카드, 카드 클릭 시 바로 아래 행에 큰 플레이어가 인라인 확장
 * - 모바일(360~767px): 가로 슬라이드(180×101 고정 카드), 클릭 시 슬라이드 하단에 큰 플레이어 표시
 * - 선택(재생 중) 카드에 오버레이/디밍 효과(data-active)
 *
 * Props
 * - playlist {string} 플레이리스트 URL 또는 playlistId
 * - pageSize {number} 불러올 썸네일 개수(기본 9)
 *
 * 환경변수
 * - import.meta.env.VITE_YT_API_KEY (YouTube Data API v3 키)
 *
 * 접근성/기타
 * - 자동재생 안정화를 위한 origin 파라미터 사용
 * - 페이지 전환 시 확장 상태 초기화
 * - 로딩/에러 상태 표시
 *
 * 사용 예시
 * <PhotoAndVideo playlist="https://www.youtube.com/watch?v=...&list=PLAYLIST_ID" pageSize={9} />
 */

import React, { useEffect, useMemo, useState, useRef } from 'react';
import * as S from '@routes/activity/components/PhotoAndVideoStyle';
import Right20 from '@assets/activity/ic-right-20.svg';
import Left20 from '@assets/activity/ic-left-20.svg';
import useMediaQuery from '@hooks/useMediaQuery'; // 경로 프로젝트에 맞게

const API_KEY = import.meta.env.VITE_YT_API_KEY || '';

const getPlaylistId = (input) => {
  if (!input) return null;
  try {
    const u = new URL(input);
    return u.searchParams.get('list');
  } catch {
    return input; // 이미 ID일 수 있음
  }
};

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
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [expandedVid, setExpandedVid] = useState(null);

  const playlistId = useMemo(() => getPlaylistId(playlist), [playlist]);

  // 모바일(360~767)
  const isMobile = useMediaQuery('(min-width: 0px) and (max-width: 767px)');
  const scrollerRef = useRef(null);

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

  const onCardClick = (idx, vid) => {
    if (expandedIdx === idx) {
      setExpandedIdx(null);
      setExpandedVid(null);
    } else {
      setExpandedIdx(idx);
      setExpandedVid(vid);
    }
  };

  const source = loading ? Array.from({ length: pageSize }) : items;

  /* ===========================
     모바일 렌더 (슬라이드 + 하단 큰 플레이어)
     =========================== */
  if (isMobile) {
    return (
      <S.Wrap>
        <S.MobileScroller ref={scrollerRef}>
          {source.map((it, idx) => {
            const sn = it?.snippet;
            const vid = sn?.resourceId?.videoId || `sk-${idx}`;
            const title = sn?.title || '';
            const thumb =
              sn?.thumbnails?.maxres?.url ||
              sn?.thumbnails?.high?.url ||
              sn?.thumbnails?.medium?.url ||
              sn?.thumbnails?.default?.url;

            return (
              <S.MobileCard
                key={vid}
                onClick={() => onCardClick(idx, vid)}
                title={title}
                aria-label={title}
                data-active={expandedVid === vid || undefined}>
                {loading ? <S.Thumb as="div" /> : <S.Thumb src={thumb} alt={title} />}
              </S.MobileCard>
            );
          })}
        </S.MobileScroller>

        {expandedVid && (
          <S.MobileExpanded>
            <S.PlayerBox>
              <iframe
                src={`https://www.youtube.com/embed/${expandedVid}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1${ORIGIN}`}
                title="video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </S.PlayerBox>
          </S.MobileExpanded>
        )}

        <S.Pager>
          <S.IconBtn onClick={() => setPageToken('')} disabled={!pageToken} aria-label="이전">
            <img src={Left20} alt="leftBtn" width={5} height={10} />
          </S.IconBtn>
          <S.IconBtn onClick={() => setPageToken(nextToken || '')} disabled={!nextToken} aria-label="다음">
            <img src={Right20} alt="rightBtn" width={5} height={10} />
          </S.IconBtn>
        </S.Pager>
        {err && <S.ErrorMsg>{err}</S.ErrorMsg>}
      </S.Wrap>
    );
  }

  /* 데스크톱/태블릿인라 */
  const children = [];
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
      <S.Card
        key={vid}
        onClick={() => onCardClick(idx, vid)}
        title={title}
        aria-label={title}
        data-active={(expandedIdx === idx && expandedVid === vid) || undefined}>
        {loading ? <S.Thumb as="div" /> : <S.Thumb src={thumb} alt={title} />}
      </S.Card>,
    );

    if (expandedIdx === idx && expandedVid === vid) {
      children.push(
        <S.Expanded key={`exp-${vid}`}>
          <S.PlayerBox>
            <iframe
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
          <img src={Left20} alt="leftBtn" width={10} height={20} />
        </S.IconBtn>
        <S.IconBtn onClick={() => setPageToken(nextToken || '')} disabled={!nextToken} aria-label="다음">
          <img src={Right20} alt="rightBtn" width={10} height={20} />
        </S.IconBtn>
      </S.Pager>
      {err && <S.ErrorMsg>{err}</S.ErrorMsg>}
    </S.Wrap>
  );
}
