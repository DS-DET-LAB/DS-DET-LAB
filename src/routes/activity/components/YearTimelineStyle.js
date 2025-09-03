// YearTimeline 스타일 분리
import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate; /* 부모 z-index 간섭 차단 */
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 24px; /* 왼쪽: 연도, 오른쪽: 점 */
  grid-auto-rows: auto;
  align-content: start;
  align-items: center;
  column-gap: 16px;
  row-gap: 72px;
`;

/* Rail: 세로 라인 (기본 z-index:1) */
export const Rail = styled.div`
  position: absolute;
  right: 11px;
  top: 0;
  bottom: 0;
  width: 2px;
  height: 320px;
  background: linear-gradient(180deg, ${(p) => p.$rail} 0%, ${(p) => p.$rail} 75%, rgba(152, 161, 189, 0) 100%);
  border-radius: 1px;
  z-index: 1;
  pointer-events: none;
`;

export const Step = styled.div`
  display: contents;
`;

export const YearLabel = styled.div`
  grid-column: 1;
  user-select: none;
  font-weight: ${(p) => (p.$active ? 800 : 600)};
  font-size: 20px;
  line-height: 1;
  color: ${(p) => (p.$active ? p.$primary : p.$muted)};
  cursor: ${(p) => (p.onClick ? 'pointer' : 'default')};
`;

/* Dot: 첫 + 활성 점만 레일 위로, 나머지는 레일 뒤 */
export const Dot = styled.span`
  grid-column: 2;
  justify-self: center;
  width: ${(p) => (p.$active ? '18px' : '12px')};
  height: ${(p) => (p.$active ? '18px' : '12px')};
  border-radius: 50%;
  background: ${(p) => (p.$active ? p.$primary : p.$muted)};
  position: relative; /* z-index 작동 위해 필요 */

  /* 첫 번째 점만 레일을 넘김 */
  z-index: ${(p) => (p.$isFirst && p.$active ? 2 : 0)};
`;
