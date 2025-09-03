import styled from 'styled-components';
import palette from '@styles/theme';

export const NewsPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 125px;
  padding: 70px 0;

  padding-top: ${({ viewport }) => (viewport === 'mobile' ? '30px' : '192px')};
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
  font-weight: 600;

  margin-bottom: 30px;

  font-size: ${({ viewport }) => (viewport === 'mobile' ? '16px' : '36px')};
  line-height: ${({ viewport }) => (viewport === 'mobile' ? '130%' : '150%')};
  letter-spacing: ${({ viewport }) => (viewport === 'mobile' ? '-0.4px' : '-0.9px')};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: ${palette.background.white};

  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};

  width: fit-content;
  color: ${palette.mainNavy.navy100};

  gap: ${({ viewport }) => (viewport === 'mobile' ? '3px' : '10px')};
  padding: ${({ viewport }) => (viewport === 'mobile' ? '10px' : '10px 20px')};
  font-size: ${({ viewport }) => (viewport === 'mobile' ? '12px' : '20px')};
  font-weight: ${({ viewport }) => (viewport === 'mobile' ? '400' : '500')};
  line-height: ${({ viewport }) => (viewport === 'mobile' ? '150%' : '130%')};
  letter-spacing: ${({ viewport }) => (viewport === 'mobile' ? '-0.3px' : '-0.5px')};
  margin-bottom: ${({ viewport }) => (viewport === 'mobile' ? '20px' : '30px')};
`;

export const SocialIcon = styled.img`
  width: ${({ viewport }) => (viewport === 'mobile' ? '16px' : '45px')};
`;

export const External = styled.img`
  width: 45px;
  border: 1px solid ${palette.mainNavy.navy10};
  border-radius: 50px;
`;

export const Playlist = styled.div`
  color: ${palette.text.primary};
  line-height: 130%;
  letter-spacing: -0.5px;
  align-self: stretch;

  font-size: ${({ viewport }) => (viewport === 'mobile' ? '16px' : '24px')};
  font-weight: ${({ viewport }) => (viewport === 'mobile' ? '500' : '600')};
  margin-bottom: ${({ viewport }) => (viewport === 'mobile' ? '20px' : '25px')};
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

export const PagingBtn = styled.div`
  width: ${({ viewport }) => (viewport === 'mobile' ? '20px' : '40px')};
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ viewport }) => (viewport === 'mobile' ? '7px' : '15px')};
`;

export const PagingIcon = styled.img`
  color: ${palette.text.secondary50};
`;
