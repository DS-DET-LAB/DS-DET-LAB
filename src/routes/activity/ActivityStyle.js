import styled from 'styled-components';
import palette from '@styles/theme';

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  padding: 70px 80px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  /* ≤1279px (태블릿) */
  @media (max-width: 1279px) {
    gap: 40px;
    padding: 56px 40px;
  }

  /* ≤767px (모바일) */
  @media (max-width: 767px) {
    gap: 32px;
    padding: 30px 20px;
  }
`;

export const HeaderName = styled.h1`
  color: ${palette.mainNavy.navy100};
  font-size: 36px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ToggleBox = styled.div`
  width: 100%;
`;

export const ToggleName = styled.div`
  color: ${palette.mainNavy.navy80};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
  }

  @media (max-width: 1279px) {
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const BranchContainer = styled.div`
  display: flex;
  gap: 96px;
  padding-top: 25px;
  align-items: flex-start;
  min-width: 0;

  @media (max-width: 1279px) {
    gap: 48px;
    padding-top: 20px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 24px;
    padding-top: 16px;
  }
`;

/* 분기 별 컴포넌트 */
export const BungiContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;

  @media (max-width: 1279px) {
    row-gap: 20px;
  }
  @media (max-width: 767px) {
    row-gap: 16px;
  }
`;

export const BContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BHeaderBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const BHeader = styled.div`
  color: ${palette.text.primary};
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 1279px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const BMonth = styled.div`
  color: ${palette.text.secondary};
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 15px;
  row-gap: 10px;
  border-radius: 17px;
  border: 1px solid ${palette.hover.back2};
  width: min(100%);
  margin: 0 auto;

  @media (max-width: 1279px) {
    padding: 18px 14px;
  }
  @media (max-width: 767px) {
    padding: 16px 12px;
    row-gap: 8px;
  }
  &:hover {
    box-shadow: 0 0 15px rgba(17, 34, 6, 0.1);
  }
`;

export const ListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 767px) {
    gap: 8px;
  }
`;

export const Circle = styled.div`
  box-sizing: border-box;
  border-radius: 9999px;
  width: 10px;
  height: 10px;
  background-color: ${palette.hover.back2};

  @media (max-width: 767px) {
    width: 8px;
    height: 8px;
  }
`;

export const List = styled.div`
  color: ${palette.text.secondary};
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 1279px) {
    font-size: 16px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const MobileTabsRow = styled.div`
  padding: 8px 0 12px;
`;

export const MobileLine = styled.img`
  display: none;

  @media (max-width: 767px) {
    display: block;
    margin: 8px auto 0; /* 중앙 정렬 */
    max-width: 100%;
    height: auto;
  }
`;
