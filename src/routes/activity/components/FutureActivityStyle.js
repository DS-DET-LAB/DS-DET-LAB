import styled from 'styled-components';
import palette from '@styles/theme';

export const Contianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  /* 360~767px: 좌우 여백 줄이기 */
  @media (min-width: 360px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FelxBox = styled.div`
  @media (min-width: 360px) and (max-width: 767px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const Box = styled.div`
  display: flex;
  padding: 35px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${palette.hover.back2};
  background: ${palette.background.white};
  @media (min-width: 360px) and (max-width: 767px) {
    padding: 20px;
  }
`;

export const Year = styled.div`
  color: ${palette.text.secondary};
  font-size: 18px;
  font-weight: 400;
  margin: 3px 0 0;
  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 14px;
    margin-right: 3px;
  }
`;

export const HeadLine = styled.h3`
  color: ${palette.text.primary};
  font-size: 20px;
  font-weight: 600;
  margin: 3px 0 10.5px;
  @media (max-width: 767px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const AboutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Line = styled.div`
  width: 3px;
  height: 55px;
  background: ${palette.text.secondary50};
  flex: 0 0 3px;
  display: block;
  border-radius: 5px;
  @media (max-width: 767px) {
    height: 100%;
  }
`;

export const About = styled.div`
  color: ${palette.text.body};
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
