import styled from 'styled-components';
import palette from '@styles/theme';

export const Info = styled.div`
  display: flex;
  justify-content: center;
  gap: 125px;

  max-width: 1234px;
  width: 100%;

  margin: 192px auto 165px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  flex: 1;
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
`;

export const ContentWrapper = styled.div`
  margin-top: -10px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Count = styled.div`
  color: #333;

  font-size: 18px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.45px;

  span {
    color: ${palette.text.primary};
    font-weight: 600;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 15px;
  padding: 10px 0;
`;

export const Pagenation = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: ${palette.mainNavy.navy80};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
