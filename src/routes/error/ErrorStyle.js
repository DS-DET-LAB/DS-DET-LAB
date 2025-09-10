import styled from 'styled-components';
import palette from '@styles/theme';

export const Area = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 44px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(93deg, rgba(18, 32, 102, 0.1) 0%, rgba(18, 32, 102, 0.25) 100%), #fff;
  color: ${palette.mainNavy.navy80};
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.72px;
`;

export const Logo = styled.img`
  width: 118.726px;
  height: 43.837px;
`;

export const Error = styled.img`
  width: 341.256px;
  height: 131.055px;
`;

export const Btn = styled.div`
  display: flex;
  padding: 20px 166px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${palette.mainNavy.navy100};
  color: ${palette.background.white};
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.72px;
  cursor: pointer;
`;
