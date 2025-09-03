import styled from 'styled-components';
import palette from '@styles/theme';
import ArrowIcon from '@assets/community/ic-arrow-bottom.svg?react';

export const Header = styled.header`
  position: sticky;
  top: ${({ $headerHeight }) => `${$headerHeight}px`};
  z-index: 888;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: ${({ $isMobile }) => ($isMobile ? '10px 20px' : '20px 80px')};
  background-color: #fff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
`;

export const Menu = styled.p`
  margin: 0;

  color: ${palette.text.secondary};
  font-size: ${({ $isMobile }) => ($isMobile ? '12px' : '16px')};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: ${({ $isMobile }) => ($isMobile ? '-0.3px' : '-0.4px')};
  transition:
    color 0.3s ease-in-out,
    font-weight 0.6s ease-in-out;
`;

export const Arrow = styled(ArrowIcon)`
  border-radius: 7px;
  width: ${({ $isMobile }) => ($isMobile ? '16px' : '20px')};
  height: ${({ $isMobile }) => ($isMobile ? '16px' : '20px')};
  background-color: ${palette.mainNavy.navy30};
`;
