import styled from 'styled-components';
import palette from '@styles/theme';

export const CardImg = styled.img`
  width: 64px;
  height: 64px;
`;

export const Card = styled.div`
  display: flex;
  width: 238px;
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
`;

export const CardText = styled.p`
  text-align: center;
  margin: 0;
`;
