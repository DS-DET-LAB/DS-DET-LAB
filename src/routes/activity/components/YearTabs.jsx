// YearTabs.jsx
import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/theme'; // 경로 프로젝트에 맞게

const NAVY = (palette && palette.mainNavy?.navy100) || '#1f2a68';
const GRAY = (palette && palette.text?.tertiary) || '#c7cbe0';

export default function YearTabs({
  years,
  value, // controlled: 선택된 연도
  defaultValue, // uncontrolled 초기값
  onChange, // (year) => void
  gap = 32, // 탭 간격(px)
  size = 'lg', // 'md' | 'lg'
  disabledYears = [], // 비활성 연도 리스트
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
    <Wrap role="tablist" aria-label="연도 선택" $gap={gap} className={className} onKeyDown={onKeyDown}>
      {list.map((y) => {
        const disabled = disabledYears.includes(y);
        const active = String(selected) === String(y);
        return (
          <YearBtn
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
          </YearBtn>
        );
      })}
    </Wrap>
  );
}

/* ------------ styles ------------ */
const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${(p) => p.$gap}px;
`;

const YearBtn = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  padding: 0 2px 8px; /* 밑줄 여유 */
  margin: 0;
  cursor: pointer;
  position: relative;

  color: ${GRAY};
  font-weight: 700;
  line-height: 1;

  /* 사이즈 */
  &[data-size='lg'] {
    font-size: 14px;
  }
  &[data-size='md'] {
    font-size: 14px;
  }

  /* 활성 */
  &[data-active] {
    color: ${NAVY};
  }
  &[data-active]::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: ${NAVY};
    border-radius: 2px;
  }

  /* 비활성 */
  &[data-disabled] {
    opacity: 0.45;
    cursor: not-allowed;
  }

  /* 접근성 포커스 */
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 -2px 0 ${NAVY};
  }
`;
