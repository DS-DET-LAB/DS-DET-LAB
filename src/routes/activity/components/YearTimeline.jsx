/**
 * YearTimeline
 * 연도 타임라인 컴포넌트
 *
 * 기능
 * - 세로 레일을 따라 연도 스텝 배치
 * - activeYear는 강조(폰트/컬러/점 크기)
 * - 연도 클릭 핸들러(onYearClick) 제공
 *
 * Props
 * - years {number[]}          표시할 연도 배열 (위→아래 순)
 * - activeYear {number}       강조할 연도
 * - height {number|string}    컴포넌트 높이(px 또는 CSS 값), 기본 420
 * - onYearClick {(y,i)=>void} 연도 클릭 시 콜백 (선택)
 * - colors {{
 *     primary?: string,  // 강조 컬러
 *     rail?: string,     // 레일 컬러
 *     mutedText?: string,// 비활성 텍스트
 *     mutedDot?: string, // 비활성 점
 *   }}
 * - className {string}   외부 스타일 커스터마이즈용
 *
 * 사용 예시
 * <YearTimeline
 *   years={[2025, 2026, 2027]}
 *   activeYear={2025}
 *   height={520}
 *   onYearClick={(y,i)=>console.log(y,i)}
 * />
 */

import React from 'react';
import * as S from '@routes/activity/components/YearTimelineStyle';
import palette from '@styles/theme';

export default function YearTimeline({ years = [], activeYear, height = 420, onYearClick, colors = {}, className }) {
  const tone = {
    primary: palette.mainNavy.navy100,
    rail: '#B8BCD1',
    mutedText: palette.mainNavy.navy30,
    mutedDot: palette.mainNavy.navy30,
    ...colors,
  };

  return (
    <S.Wrap style={{ height }} className={className}>
      {/* 세로 라인 */}
      <S.Rail $rail={tone.rail} />

      {/* 연도 스텝들 */}
      <S.Grid>
        {years.map((y, i) => {
          const active = y === activeYear;
          return (
            <S.Step key={y}>
              <S.YearLabel
                $active={active}
                $primary={tone.primary}
                $muted={tone.mutedText}
                onClick={onYearClick ? () => onYearClick(y, i) : undefined}>
                {y}
              </S.YearLabel>

              <S.Dot $active={active} $isFirst={i === 0} $primary={tone.primary} $muted={tone.mutedDot} />
            </S.Step>
          );
        })}
      </S.Grid>
    </S.Wrap>
  );
}
