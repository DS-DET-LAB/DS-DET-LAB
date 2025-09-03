import styled from 'styled-components';
import palette from '@styles/theme';

export const Contianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  /* ~767px: 좌우 여백 줄이기 */
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FelxBox = styled.div`
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
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
  @media (max-width: 767px) {
    padding: 20px;
  }
`;

export const Year = styled.div`
  color: ${palette.text.secondary};
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 14px;
    margin-right: 3px;
  }
`;

export const HeadLine = styled.h3`
  color: ${palette.text.primary};
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const AboutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 7px;
`;
export const Line = styled.div`
  width: 2px;
  background: ${palette.text.secondary50};
  border-radius: 5px;
  align-self: stretch;
  flex-shrink: 0;

  @media (max-width: 767px) {
    height: 40px;
    width: 2px;
  }
`;

export const About = styled.div`
  color: ${palette.text.body};
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
