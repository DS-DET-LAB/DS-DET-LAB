import styled from 'styled-components';
import palette from '@styles/theme';

export const CardImg = styled.img`
  width: 64px;
  height: 64px;

  @media (max-width: 767px) {
    width: 24px;
    height: 24px;
  }
`;

export const Card = styled.div`
  display: flex;
  width: clamp(155px, 16vw, 200px);
  height: 140px;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 17px;
  background: ${palette.background.white};
  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};

  @media (max-width: 767px) {
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px 30px;
    box-sizing: border-box;
  }
`;

export const CardText = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 500;
    text-align: start;
  }
`;
