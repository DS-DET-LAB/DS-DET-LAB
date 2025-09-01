import styled from 'styled-components';
import palette from '@styles/theme';

export const NewsItem = styled.a`
  width: 295px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 767px) {
    width: 180px;
  }

  @media (max-width: 420px) {
    width: 80vw;
  }
`;

export const Img = styled.img`
  border-radius: 11px;
  height: 166px;
  object-fit: cover;
  @media (max-width: 767px) {
    height: 101px;
  }
  @media (max-width: 420px) {
    height: 45vw;
  }
`;

export const Youtube = styled.iframe`
  border-radius: 11px;
  height: 166px;
  object-fit: cover;
  @media (max-width: 767px) {
    height: 101px;
  }
  @media (max-width: 420px) {
    height: 45vw;
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
  font-weight: 500;
  letter-spacing: -0.5px;
  align-self: stretch;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  height: 52px;

  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 400;
    height: 37px;
  }
`;

export const Date = styled.div`
  color: ${palette.text.secondary};
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  letter-spacing: -0.4px;
  align-self: stretch;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
