// @routes/activity/components/YearTimeline.jsx
import React from 'react';
import styled from 'styled-components';
import palette from '@styles/theme';

/**
 * 연도 타임라인
 * @param {number[]} years - 표시할 연도 배열 (위에서 아래로)
 * @param {number} activeYear - 강조 표시할 연도
 * @param {number|string} height - 컴포넌트 높이(px 또는 css 값)
 * @param {(y:number, i:number)=>void} onYearClick - 연도 클릭 핸들러 (선택)
 * @param {object} colors - 색상 커스터마이즈 { primary, rail, mutedText, mutedDot }
 */
export default function YearTimeline({ years = [], activeYear, height = 420, onYearClick, colors = {}, className }) {
  const tone = {
    primary: palette.mainNavy.navy100,
    rail: '#B8BCD1', // 세로 라인
    mutedText: palette.mainNavy.navy30, // 비활성 텍스트
    mutedDot: palette.mainNavy.navy30, // 비활성 점
    ...colors,
  };

  return (
    <Wrap style={{ height }} className={className}>
      {/* 세로 라인 */}
      <Rail $rail={tone.rail} />

      {/* 연도 스텝들 */}
      <Grid>
        {years.map((y, i) => {
          const active = y === activeYear;
          return (
            <Step key={y}>
              <YearLabel
                $active={active}
                $primary={tone.primary}
                $muted={tone.mutedText}
                onClick={onYearClick ? () => onYearClick(y, i) : undefined}>
                {y}
              </YearLabel>
              <Dot $active={active} $isFirst={i === 0} $primary={tone.primary} $muted={tone.mutedDot} />
            </Step>
          );
        })}
      </Grid>
    </Wrap>
  );
}

/* Style */
const Wrap = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate; /* 부모의 z-index 간섭 차단 */
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 24px; /* 왼쪽: 연도, 오른쪽: 점 */
  grid-auto-rows: auto;
  align-content: start;
  align-items: start;
  column-gap: 16px;
  row-gap: 72px;
`;

/* Rail: 라인은 기본적으로 위(1) */
const Rail = styled.div`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  width: 2px;
  height: 320px;
  background: linear-gradient(180deg, ${(p) => p.$rail} 0%, ${(p) => p.$rail} 75%, rgba(152, 161, 189, 0) 100%);
  border-radius: 1px;
  z-index: 1;
  pointer-events: none;
`;
const Step = styled.div`
  display: contents;
`;

const YearLabel = styled.div`
  grid-column: 1;
  user-select: none;
  font-weight: ${(p) => (p.$active ? 800 : 600)};
  font-size: ${(p) => (p.$active ? '28px' : '24px')};
  line-height: 1;
  color: ${(p) => (p.$active ? p.$primary : p.$muted)};
  cursor: ${(p) => (p.onClick ? 'pointer' : 'default')};
`;
/* Dot: 첫 + 활성 점만 레일 위로, 나머지는 레일 뒤 */
const Dot = styled.span`
  grid-column: 2;
  justify-self: center;
  width: ${(p) => (p.$active ? '18px' : '12px')};
  height: ${(p) => (p.$active ? '18px' : '12px')};
  border-radius: 50%;
  background: ${(p) => (p.$active ? p.$primary : p.$muted)};
  position: relative; /* z-index가 작동하려면 필요 */

  /* 첫 번째 점만 레일을 넘김 */
  z-index: ${(p) => (p.$isFirst && p.$active ? 2 : 0)};
`;
