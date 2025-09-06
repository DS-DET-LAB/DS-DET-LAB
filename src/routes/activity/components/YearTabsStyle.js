// YearTabs 스타일
import styled from 'styled-components';
import palette from '@styles/theme';

const NAVY = (palette && palette.mainNavy?.navy100) || '#1f2a68';
const GRAY = (palette && palette.text?.tertiary) || '#c7cbe0';

export const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const YearBtn = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  position: relative;

  color: ${palette.mainNavy.navy30};
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
    color: ${palette.mainNavy.navy100};
  }
  &[data-active]::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${palette.mainNavy.navy100};
    border-radius: 2px;
  }
`;
