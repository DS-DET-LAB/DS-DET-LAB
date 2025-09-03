// YearTabs 스타일
import styled from 'styled-components';
import palette from '@styles/theme';

const NAVY = (palette && palette.mainNavy?.navy100) || '#1f2a68';
const GRAY = (palette && palette.text?.tertiary) || '#c7cbe0';

export const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${(p) => (typeof p.$gap === 'number' ? `${p.$gap}px` : '32px')};
`;

export const YearBtn = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  padding: 0 2px 8px;
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
    border-radius: 2px;
  }
`;
