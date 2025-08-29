// @routes/activity/components/PhotoAndVideo.styled.js
import styled from 'styled-components';
import palette from '@styles/theme';

export const Wrap = styled.div`
  width: 100%;
  overflow: visible; /* 3× 확대 시 겹침 허용 */
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
  isolation: isolate;

  transform-origin: center center;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease;
  ${(p) =>
    p.$selected &&
    `
    transform: scale(3);
    z-index: 50;
    box-shadow: 0 12px 40px rgba(10,22,70,0.18);
  `}
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  /* 호버 시 이미지만 1.1배 */
  transition: transform 180ms ease;
  ${Card}:hover & {
    transform: scale(1.1);
  }
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

export const PlayerWrapper = styled.div`
  position: absolute;
  inset: 0;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

export const Controls = styled.div`
  position: absolute;
  left: 12px;
  bottom: 12px;
  display: flex;
  gap: 8px;
  z-index: 2;
`;

export const ControlBtn = styled.button`
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.55);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition:
    transform 120ms ease,
    opacity 120ms ease;

  /* 로컬 SVG 크기/색 */
  svg {
    width: 22px;
    height: 22px;
    display: block;
  }

  &:active {
    transform: scale(0.96);
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
  color: #fff;
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
  color: ${palette.danger?.red100 || '#c62828'};
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
`;

export const EmbedWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;
export const Note = styled.div`
  margin-top: 8px;
  color: #75819a;
  font-size: 12px;
  text-align: center;
`;
