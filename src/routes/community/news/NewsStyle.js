import styled from 'styled-components';
import palette from '@styles/theme';

export const NewsPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 125px;
  padding: 70px 0;

  @media (min-width: 1280px) {
    padding-top: 192px;
  }

  @media (max-width: 767px) {
    padding-top: 30px;
  }
`;

export const News = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  color: ${palette.mainNavy.navy100};

  font-size: 36px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.9px;

  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.4px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialBox = styled.a`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  background: ${palette.background.white};

  box-shadow: 0 0 15px 0 rgba(18, 32, 102, 0.1);

  width: fit-content;
  color: ${palette.mainNavy.navy100};
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.5px;

  margin-bottom: 30px;

  @media (max-width: 767px) {
    gap: 3px;
    padding: 10px;

    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.3px;

    margin-bottom: 20px;
  }
`;

export const SocialIcon = styled.img`
  width: 45px;
  @media (max-width: 767px) {
    width: 16px;
  }
`;

export const External = styled.img`
  width: 45px;
  border: 1px solid ${palette.mainNavy.navy10};
  border-radius: 50px;
`;

export const Playlist = styled.div`
  color: ${palette.text.primary};
  font-size: 24px;
  line-height: 130%;
  font-weight: 600;
  letter-spacing: -0.5px;
  align-self: stretch;

  margin-bottom: 25px;

  @media (max-width: 767px) {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

export const PageControll = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 15px;
  margin: 40px 0;
  @media (max-width: 767px) {
    margin: 20px 0;
  }
`;

export const PagingIcon = styled.img`
  width: 40px;
  @media (max-width: 767px) {
    width: 20px;
  }
`;
