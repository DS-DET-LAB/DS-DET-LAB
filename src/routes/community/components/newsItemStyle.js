import styled from 'styled-components';
import palette from '@styles/theme';

export const NewsItem = styled.a`
  width: 20vw;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1360px) and (max-width: 1599px) {
    width: calc(25vw - 9px);
  }

  @media (min-width: 1320px) and (max-width: 1359px) {
    width: calc(23vw - 9px);
  }

  @media (min-width: 899px) and (max-width: 960px) {
    width: calc(28vw - 11px);
  }

  @media (min-width: 768px) and (max-width: 899px) {
    width: calc(30vw - 14px);
  }

  @media (min-width: 568px) and (max-width: 767px) {
    width: calc(33vw - 24px);
  }

  @media (min-width: 420px) and (max-width: 567px) {
    width: calc(50vw - 24px);
  }

  @media (max-width: 420px) {
    width: calc(100vw - 40px);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 11px;
  border: 1px solid ${palette.mainNavy.navy30};
  height: 166px;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 101px;
  }
  @media (max-width: 420px) {
    height: 45vw;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ImgWrapper}:hover & {
    transform: scale(1.1);
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

  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 400;
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
