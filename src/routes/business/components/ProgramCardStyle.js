import styled from 'styled-components';
import palette from '@styles/theme';

export const Card = styled.div`
  flex: 1;
  padding: 35px;
  border-radius: 16px;
  background: ${palette.background.white};
  border: 1px solid ${palette.hover.back2};
  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${palette.mainNavy.navy100};
  margin: 0 0 10px;
`;

export const Desc = styled.p`
  margin: 0;
  color: ${palette.text.body};
`;

export const LineIcon = styled.img``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
