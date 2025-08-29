import styled from 'styled-components';
import palette from '@styles/theme';

export const Wrap = styled.div`
  width: 100%;
  overflow: visible; /* 클릭 확대가 그리드 밖으로 넘어갈 수 있게 */
`;

export const Grid = styled.div`
  position: relative; /* z-index 기준 */
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
  isolation: isolate;

  /* 클릭 확대 (비율 유지, 그리드 위로 오버레이) */
  transform-origin: center center;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease;
  ${(p) =>
    p.$zoomed &&
    `
    transform: scale(2.4);
    z-index: 40;
    box-shadow: 0 12px 40px rgba(10,22,70,0.18);
  `}

  /* 호버 시 이미지 1.1배 (썸네일만 확대) */
  &:hover img {
    transform: scale(1.1);
  }

  /* 스켈레톤처럼 보이도록 기본 배경 (썸네일 로딩 전) */
  background-image:
    linear-gradient(45deg, #f2f4f7 25%, transparent 25%), linear-gradient(-45deg, #f2f4f7 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #f2f4f7 75%), linear-gradient(-45deg, transparent 75%, #f2f4f7 75%);
  background-size: 24px 24px;
  background-position:
    0 0,
    0 12px,
    12px -12px,
    -12px 0;
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
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
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
  color: #fff;
  background: ${palette.mainNavy?.navy80 || palette.mainNavy?.navy100};
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
  color: ${palette.danger?.red100 || '#c62828'};
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
`;
