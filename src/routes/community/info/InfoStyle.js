import styled from 'styled-components';
import palette from '@styles/theme';

export const Info = styled.div`
  box-sizing: border-box;

  display: flex;
  /* justify-content: center; */
  gap: 125px;

  max-width: 1234px;
  width: 100%;

  margin: 0 auto 70px;

  @media (min-width: 768px) and (max-width: 1279px) {
    max-width: none;
    padding: 0 80px;
    margin-top: 70px;
  }

  @media (max-width: 767px) {
    max-width: none;
    padding: 0 20px;
    margin-top: 30px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  flex: 1;

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

export const Community = styled.div`
  border-radius: 11px;
  background-color: ${palette.mainNavy.navy100};
  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
  color: ${palette.background.white};

  width: 190px;
  height: 56px;
  padding: 10px 23px;

  box-sizing: border-box;

  flex-shrink: 0;
`;

export const InfoText = styled.h1`
  color: ${palette.mainNavy.navy100};

  font-size: 36px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.9px;

  margin: 0;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.4px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: -10px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: -25px;
  }

  @media (max-width: 767px) {
    margin-top: 5px;
    gap: 20px;
  }
`;

export const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: ${({ $hasNoResult }) => $hasNoResult && '100px'};
`;

export const Count = styled.div`
  color: #333;

  font-size: 18px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.45px;

  margin-left: 20px;

  span {
    color: ${palette.text.primary};
    font-weight: 600;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.35px;

    span {
      font-weight: 500;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 15px;
  padding: 10px 0;
`;

export const Pagination = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: ${palette.mainNavy.navy80};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;

  &:disabled {
    cursor: not-allowed;
    background-color: ${palette.text.secondary50};
  }

  @media (max-width: 767px) {
    width: 20px;
    height: 20px;
    border-radius: 7px;
  }
`;
