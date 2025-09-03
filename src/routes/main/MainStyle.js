import styled from 'styled-components';
import palette from '@styles/theme';

export const ShortcutBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  gap: ${({ $viewport }) => ($viewport === 'mobile' ? '20px' : $viewport === 'tablet' ? '20px' : '40px')};
  background-color: ${palette.background.white};
  box-shadow: 0 4px 4px 0 ${palette.mainNavy.navy10};
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ $viewport }) => ($viewport === 'mobile' ? '30px 20px' : '80px 340px')};
  gap: 15px;
  background-color: ${({ $isBusiness }) => $isBusiness && palette.mainNavy.navy10};
  margin-bottom: ${({ $viewport, $isBusiness }) => ($viewport === 'mobile' && !$isBusiness ? '70px' : '0')};
`;

export const BottomContainer = styled.div`
  width: 100%;
  min-width: ${({ $viewport }) => ($viewport === 'mobile' ? '100%' : '610px')};
  max-width: ${({ $viewport }) => ($viewport === 'mobile' ? '100%' : '610px')};
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 1920px) {
    max-width: 100%;
  }
`;

export const MoreButtonSection = styled.div`
  width: 100%;
  min-width: ${({ $viewport }) => ($viewport === 'mobile' ? '100%' : '610px')};
  max-width: ${({ $viewport }) => ($viewport === 'mobile' ? '100%' : '610px')};
  display: flex;
  justify-content: flex-end;

  @media (min-width: 1920px) {
    max-width: 100%;
  }
`;
