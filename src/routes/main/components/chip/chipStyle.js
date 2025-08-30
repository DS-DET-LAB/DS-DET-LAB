import styled from 'styled-components';
import palette from '@styles/theme';

export const Container = styled.div`
  width: fit-content;
  padding: ${({ isMobile }) => (isMobile ? '3px 5px' : '5px 10px')};
  border-radius: 30px;
  background-color: ${palette.mainNavy.navy10};
`;

export const Text = styled.div`
  color: ${palette.text.secondary};
  /* r14 & r12 */
  font-size: ${({ isMobile }) => (isMobile ? '12px' : '14px')};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: ${({ isMobile }) => (isMobile ? '-0.3px' : '-0.35px')};
`;
