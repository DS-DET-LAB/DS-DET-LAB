import styled from 'styled-components';
import palette from '@styles/theme';

export const Wrap = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  justify-content: center; /* 가운데 정렬 */
  padding: 0 100px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.button`
  position: relative;
  isolation: isolate;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(10, 22, 70, 0.08);
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  /* 썸네일 로딩 전 체크보드*/
  background-image:
    linear-gradient(45deg, #f2f4f7 25%, transparent 25%), linear-gradient(-45deg, #f2f4f7 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #f2f4f7 75%), linear-gradient(-45deg, transparent 75%, #f2f4f7 75%);
  background-size: 24px 24px;
  background-position:
    0 0,
    0 12px,
    12px -12px,
    -12px 0;

  &:hover img {
    transform: scale(1.1);
  }

  /*재생 중(선택) 시 어두운 오버레이 */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0); /* 기본 투명 */
    transition: background 160ms ease;
    pointer-events: none;
  }
  img {
    transition:
      transform 180ms ease,
      filter 160ms ease;
  }
  &[data-active]::after {
    background: rgba(0, 0, 0, 0.25);
  }
  &[data-active] img {
    filter: brightness(0.75);
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 180ms ease;
`;

/* 클릭 시 생성되는 확장 플레이어 행 */
export const Expanded = styled.div`
  grid-column: 1 / -1;
`;

export const PlayerBox = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 10px 28px rgba(10, 22, 70, 0.16);
  position: relative;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

export const Pager = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 25px;
  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const IconBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 7px;
  border: none;
  background: ${palette.mainNavy?.navy100 || '#1f2d64'};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition:
    transform 120ms ease,
    opacity 120ms ease;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:not(:disabled):active {
    transform: scale(0.96);
  }
  @media (min-width: 767px) {
    width: 40px;
    height: 40px;
    border-radius: 15px;
  }
`;

export const ErrorMsg = styled.div`
  color: ${palette.danger?.red100};
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
`;

/* 모바일(360–767px) */
export const MobileScroller = styled.div`
  /* 가로 슬라이더 컨테이너 */
  display: none;
  @media (min-width: 360px) and (max-width: 767px) {
    display: flex;
    overflow-x: auto;
    gap: 12px;
    padding: 0 12px 0;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  @media (max-width: 767px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

/* 슬라이드 아이템 (카드 확장) */
export const MobileCard = styled(Card)`
  @media (min-width: 360px) and (max-width: 767px) {
    aspect-ratio: auto; /* Card 기본 16/9 비율 무효화 */
    flex: 0 0 180px; /* 슬라이드 한 칸 폭 고정 */
    width: 180px;
    height: 101px;
    scroll-snap-align: start;
  }
`;

/* 슬라이드 아래 큰 플레이어 */
export const MobileExpanded = styled.div`
  display: none;
  @media (min-width: 360px) and (max-width: 767px) {
    display: block;
    padding: 8px 12px 0;
  }
`;
