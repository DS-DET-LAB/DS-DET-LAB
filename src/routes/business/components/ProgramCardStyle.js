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
  margin: 0 0 7.5px;

  @media (max-width: 767px) {
    font-size: 16px;
    margin: 0 0 7px;
  }
`;

export const Desc = styled.p`
  margin: 0;
  color: ${palette.text.body};

  @media (min-width: 768px) and (max-width: 899px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
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
