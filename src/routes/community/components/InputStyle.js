import styled from 'styled-components';
import palette from '@styles/theme';

export const InputDiv = styled.div`
  width: 100%;

  box-sizing: border-box;

  position: relative;

  padding: 11px 20px;

  display: flex;
  justify-content: space-between;

  border-radius: 17px;
  background-color: ${palette.background.white};
  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};

  svg {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    padding: 10px 15px;
  }
`;

export const Input = styled.input`
  width: 100%;

  flex: 1;

  outline: none;
  border: none;

  color: ${palette.text.body};
  font-size: 18px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.45px;

  &::placeholder {
    color: ${palette.text.body};
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -0.45px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.3px;

    &::placeholder {
      font-size: 12px;
      line-height: 150%;
      letter-spacing: -0.3px;
    }
  }
`;
