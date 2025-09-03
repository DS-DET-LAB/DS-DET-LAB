/**
 * YearTabs
 * 연도 탭 네비게이션 컴포넌트
 *
 * 기능
 * - 연도 리스트를 탭으로 노출, 클릭/키보드(←/→)로 선택 가능
 * - controlled(value/onChange) & uncontrolled(defaultValue) 모두 지원
 * - 비활성 연도(disabledYears) 처리
 *
 * Props
 * - years {number[]} 탭으로 보여줄 연도 배열 (미지정 시 현재연도~+2)
 * - value {number} 선택된 연도(컨트롤드)
 * - defaultValue {number} 초기 선택값(언컨트롤드)
 * - onChange {(year:number)=>void} 선택 변경 콜백
 * - gap {number} 탭 사이 간격(px), 기본 32
 * - size {'md'|'lg'} 탭 폰트 크기 프리셋, 기본 'lg'
 * - disabledYears {number[]} 비활성 처리할 연도들
 * - className {string} 커스텀 클래스
 *
 * 사용 예시
 * <YearTabs years={[2025,2026,2027]} value={year} onChange={setYear} size="lg" />
 */

import React from 'react';
import * as S from '@routes/activity/components/YearTabsStyle';

export default function YearTabs({
  years,
  value,
  defaultValue,
  onChange,
  gap = 32,
  size = 'lg',
  disabledYears = [],
  className,
}) {
  const fallbackYears = React.useMemo(() => {
    const y = new Date().getFullYear();
    return [y, y + 1, y + 2];
  }, []);
  const list = years && years.length ? years : fallbackYears;

  const [internal, setInternal] = React.useState(defaultValue ?? list[0]);
  const selected = value ?? internal;

  const setSelected = (yr) => {
    if (value === undefined) setInternal(yr);
    onChange?.(yr);
  };

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const idx = list.findIndex((y) => String(y) === String(selected));
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const nextIdx = Math.min(list.length - 1, Math.max(0, idx + dir));
    const next = list[nextIdx];
    if (!disabledYears.includes(next)) setSelected(next);
  };

  return (
    <S.Wrap role="tablist" aria-label="연도 선택" $gap={gap} className={className} onKeyDown={onKeyDown}>
      {list.map((y) => {
        const disabled = disabledYears.includes(y);
        const active = String(selected) === String(y);
        return (
          <S.YearBtn
            key={y}
            role="tab"
            aria-selected={active}
            aria-disabled={disabled}
            tabIndex={active ? 0 : -1}
            data-active={active || undefined}
            data-size={size}
            data-disabled={disabled || undefined}
            onClick={() => !disabled && setSelected(y)}>
            {y}
          </S.YearBtn>
        );
      })}
    </S.Wrap>
  );
}
