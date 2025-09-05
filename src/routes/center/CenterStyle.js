import styled from 'styled-components';
import palette from '@styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) and (max-width: 899px) {
    padding: 70px 0;
  }

  @media (max-width: 767px) {
    padding: 0;
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
  position: relative;
  min-width: 0;
  box-sizing: border-box;

  @media (min-width: 768px) and (max-width: 899px) {
    overflow: visible;
    margin: 0 40px;
  }

  @media (max-width: 767px) {
    margin: 30px 20px 70px;
  }
`;

export const Title = styled.h2`
  color: ${palette.mainNavy.navy100};
  font-size: 36px;
  font-weight: 600;
  scroll-margin-top: 100px;
  margin: 0 0 50px;

  &[less-margin='true'] {
    margin: 0 0 25px 0;
  }

  &:nth-of-type(2) {
    margin: 100px 0 50px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    scroll-margin-top: 80px;
    margin: 0px 0 20px;

    &:first-of-type {
      margin: 0 0 30px 0;
    }

    &[less-margin='true'] {
      margin: 0 0 20px 0;
    }

    &:nth-of-type(2) {
      margin: 0 0 30px;
    }

    &:nth-of-type(3) {
      margin: 0 0 30px;
    }
  }
`;

export const TriIcon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`;

export const TextBody = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const Body = styled.div`
  max-width: 100%;

  &:nth-of-type(3) {
    margin: 20px 0 70px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 899px) {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 20px;
    border-radius: 17px;
    border: none;
    box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
    margin: 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 50px;

  &[no-margin='true'] {
    margin: 0;
  }

  &[less-margin='true'] {
    margin: 0;
  }

  &[data-tail='true'] {
    margin: 0 0 30px 7px;
  }

  @media (max-width: 767px) {
    margin: 0 0 20px;

    &[data-tail='true'] {
      margin: 0 0 20px 10px;
    }
  }
`;

export const EngSpan = styled.span`
  font-weight: 300;

  @media (max-width: 767px) {
    color: ${palette.text.secondary50};
  }
`;

export const SubTitle = styled.h3`
  color: ${palette.mainNavy.navy80};
  font-size: 24px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 16px;
    margin: 0;
  }
`;

export const WrapWrapper = styled.div`
  overflow: visible;
  padding: 0 0 100px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 767px) {
    padding: 12px 0;
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 899px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    padding: 0;
    gap: 20px;
    justify-content: stretch;
    margin-bottom: 15px;
  }
`;

export const OrganizationImg = styled.img`
  width: 450px;
  height: 252px;

  @media (min-width: 900px) and (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 70%;
    height: auto;
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  @media (max-width: 767px) {
    margin: 17px 0 39px 0;
  }
`;

export const PSbub = styled.p`
  color: ${palette.text.primary};
  font-size: 18px;
  font-weight: 600;
  margin: 0;

  &:last-child {
    color: #6b7684;
    font-size: 16px;
    font-weight: 400;
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
  margin: 40px 0;
  gap: 5px;

  @media (max-width: 767px) {
    margin: 0;
    gap: 3px;
  }
`;

export const OrganiCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 67.5px;

  @media (max-width: 767px) {
    margin-bottom: 70px;
  }
`;

export const Card = styled.div`
  display: flex;
  padding: 60px 80px;
  width: 500px;

  border-radius: 20px;
  background: ${palette.background.white};
  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};

  @media (min-width: 900px) and (max-width: 1300px) {
    ${({ $lessPadding }) =>
      $lessPadding &&
      `
        box-sizing: border-box;
        padding: 60px;
    `}
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 57px 0 56px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;

export const LabelDiv = styled.div`
  padding: 7px 15px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 20px;
  background: ${palette.mainNavy.navy10};
  margin: 0 0 10px 0;

  &[more-margin='true'] {
    margin: 0 0 15px 0;
  }
`;

export const LabelP = styled.span`
  color: ${palette.text.secondary};
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const MailImg = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`;

export const PersonalCardWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 0 56px;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

export const BreadcrumbBar = styled.nav`
  --horizontal-padding: clamp(20px, 6vw, 80px);
  --vertical-padding: 16px;

  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: var(--vertical-padding) var(--horizontal-padding);
  background: ${palette.background.white};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  height: fit-content;
  z-index: 10;

  @media (min-width: 768px) and (max-width: 899px) {
    --horizontal-padding: 40px;
    --vertical-padding: 14px;

    margin-left: -20px;
  }

  @media (max-width: 767px) {
    --horizontal-padding: 20px;
    --vertical-padding: 10px;
  }
`;

export const Crumbs = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0 0 0 10px;
  list-style: none;
  padding-bottom: 3px;

  & > li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  & p {
    color: ${palette.text.secondary};
    font-size: 12px;
    font-weight: 400;
    margin: 0;
  }
`;

export const Sep = styled.img`
  width: 16px;
  height: 16px;
`;

export const SectionLineIcon = styled.img`
  width: 100%;
  height: 1px;
  margin: 50px 0;
`;
