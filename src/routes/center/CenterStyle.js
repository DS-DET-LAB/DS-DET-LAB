import styled from 'styled-components';
import palette from '@styles/theme';

export const Wrapper = styled.div`
  display: flex;
  padding: 150px 0;
  justify-content: center;
  width: 100%;
  @media (max-width: 1279px) and (min-width: 768px) {
  }

  @media (max-width: 767px) and (min-width: 360px) {
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: sticky;
  top: calc(50vh - 120px);
  height: fit-content;

  @media (max-width: 1279px) and (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) and (min-width: 360px) {
    display: none;
  }
`;

export const Float = styled.button`
  background: transparent;
  border: none;
  padding: 6px 10px;
  color: ${palette.mainNavy.navy80};
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${palette.mainNavy.navy10};
  }
`;

export const Center = styled.div`
  display: flex;
  width: 190px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 200px;
  overflow: visible;
`;

export const Title = styled.h2`
  color: ${palette.mainNavy.navy100};
  font-size: 36px;
  font-weight: 600;
  scroll-margin-top: 100px;
`;

export const TriIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Body = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 30px 10px;
`;

export const EngSpan = styled.span`
  font-weight: 300;
`;

export const SubTitle = styled.h3`
  color: ${palette.mainNavy.navy80};
  font-size: 24px;
  font-weight: 600;
`;

export const WrapWrapper = styled.div`
  overflow: visible;
  padding: 20px 0;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px 20px;
  flex-wrap: wrap;
  width: 960px;
  margin-bottom: 100px;

  justify-content: center;

  @media (max-width: 1279px) and (min-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 767px) and (min-width: 360px) {
    padding: 0;
  }
`;

export const OrganizationImg = styled.img`
  width: 450px;
  height: 252px;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const PSbub = styled.p`
  color: ${palette.textPrimary};
  font-size: 18px;
  font-weight: 600;
  margin: 0;

  &:last-child {
    color: #6b7684;
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
  }
`;

export const SpanExtraSub = styled.span`
  color: ${palette.textSecondary};
  font-size: 16px;
  font-weight: 400;
`;

export const LineIcon = styled.img``;

export const PWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 0 25px 0;
`;

export const OrganiCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Card = styled.div`
  display: flex;
  padding: 60px 80px;
  width: 500px;

  border-radius: 20px;
  background: ${palette.background.white};
  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
`;

export const LabelDiv = styled.div`
  padding: 7px 15px;
  justify-content: center;
  align-items: center;
  width: fit-content;

  border-radius: 20px;
  background: ${palette.mainNavy.navy10};
  margin: 15px 0;
`;

export const LabelP = styled.span`
  color: ${palette.text.secondary};
  font-size: 18px;
  font-weight: 400;
`;

export const MailImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const PersonalCardWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 0 56px 0;

  flex-wrap: wrap;
`;
