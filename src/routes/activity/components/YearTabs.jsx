/**
 * YearTabs (static)
 * 연도 탭 표시 전용 컴포넌트 — 상호작용 없음
 *
 * 동작
 * - 클릭/키보드로 연도 변경 불가 (완전 비활성)
 * - 지정된 연도 하나만 밑줄 표시(시각적 강조)
 *
 * Props
 * - years {number[]} 표시할 연도 배열 (미지정 시 현재연도~+2)
 * - value {number} 강조할 연도(우선 사용)
 * - defaultValue {number} value가 없을 때 초기 강조값
 * - gap {number} 탭 사이 간격(px), 기본 32
 * - size {'md'|'lg'} 폰트 크기 프리셋, 기본 'lg'
 * - disabledYears {number[]} 비활성 표시(시각적 처리만, 동작엔 영향 없음)
 * - className {string}
 *
 * 주의
 * - onChange는 사용하지 않음(상호작용 없음)
 */

import React from 'react';
import * as S from '@routes/activity/components/YearTabsStyle';

export default function YearTabs({ years, value, defaultValue, gap = 32, size = 'lg', disabledYears = [], className }) {
  const fallbackYears = React.useMemo(() => {
    const y = new Date().getFullYear();
    return [y, y + 1, y + 2];
  }, []);
  const list = years && years.length ? years : fallbackYears;

  // 강조(밑줄)할 연도 계산: value > defaultValue > 현재연도(없으면 첫 항목)
  const selected = React.useMemo(() => {
    if (value != null) return value;
    if (defaultValue != null) return defaultValue;
    const now = new Date().getFullYear();
    return list.includes(now) ? now : list[0];
  }, [value, defaultValue, list]);

  return (
    // role/키보드 핸들러 제거 (완전 표시 전용)
    <S.Wrap $gap={gap} className={className}>
      {list.map((y) => {
        const active = String(selected) === String(y);
        const disabled = disabledYears.includes(y);
        return (
          // 버튼 의미 제거: as="div", 포커스/클릭 비활성
          <S.YearBtn
            as="div"
            key={y}
            tabIndex={-1}
            data-active={active || undefined}
            data-size={size}
            data-disabled={disabled || undefined}>
            {y}
          </S.YearBtn>
        );
      })}
    </S.Wrap>
  );
}
