import styled from 'styled-components';
import palette from '../../../styles/theme';
// import palette from '@styles/theme';

export const NewsItem = styled.a`
  width: 295px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 767px) {
    width: 180px;
  }
`;

export const Img = styled.img`
  border-radius: 11px;
  height: 166px;
  object-fit: cover;
  @media (max-width: 767px) {
    height: 101px;
  }
`;

export const NewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.div`
  color: ${palette.text.primary};
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.5px;
  align-self: stretch;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Date = styled.div`
  color: ${palette.text.secondary};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.4px;
  align-self: stretch;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
