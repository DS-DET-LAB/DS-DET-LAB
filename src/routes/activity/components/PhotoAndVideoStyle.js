import styled from 'styled-components';
import palette from '@styles/theme';

export const Wrap = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.button`
  position: relative;
  padding: 0;
  border: 0;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(10, 22, 70, 0.08);
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  width: 295px;
  height: 166px;

  /* 썸네일 로딩 전 체크보드 느낌 */
  background-image:
    linear-gradient(45deg, #f2f4f7 25%, transparent 25%), linear-gradient(-45deg, #f2f4f7 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #f2f4f7 75%), linear-gradient(-45deg, transparent 75%, #f2f4f7 75%);
  background-size: 24px 24px;
  background-position:
    0 0,
    0 12px,
    12px -12px,
    -12px 0;

  /* 호버 시 이미지 1.1배 */
  &:hover img {
    transform: scale(1.1);
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 180ms ease;
`;

export const Title = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 10px;
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
`;

/* 클릭 시 생성되는 확장 플레이어 행 (그리드 전체 폭 사용) */
export const Expanded = styled.div`
  grid-column: 1 / -1;
`;

export const PlayerBox = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
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
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
`;

export const IconBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
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
`;

export const ErrorMsg = styled.div`
  color: ${palette.danger?.red100};
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
`;
