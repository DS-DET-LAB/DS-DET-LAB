import styled from 'styled-components';
import palette from '@styles/theme';

export const Container = styled.div`
  width: fit-content;
  padding: ${({ isMobile }) => (isMobile ? '5px 10px' : '10px 15px')};
  border-radius: 10px;
  cursor: pointer;
  transition: 300ms ease;

  &:hover {
    background-color: ${palette.mainNavy.navy10};
  }
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Text = styled.div`
  color: ${palette.mainNavy.navy100};
  /* r18 & r14 */
  font-size: ${({ isMobile }) => (isMobile ? '14px' : '18px')};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: ${({ isMobile }) => (isMobile ? '-0.35px' : '-0.45px')};
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
