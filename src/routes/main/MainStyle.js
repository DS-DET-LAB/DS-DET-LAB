import styled from 'styled-components';
import palette from '@styles/theme';

export const ShortcutBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  gap: 40px;
  background-color: ${palette.background.white};
  box-shadow: 0 4px 4px 0 ${palette.mainNavy.navy10};
`;

export const BusinessSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ isMobile }) => (isMobile ? '30px 20px' : '80px 340px')};
  gap: 15px;
  flex-wrap: wrap;
  background-color: ${palette.mainNavy.navy10};
`;
