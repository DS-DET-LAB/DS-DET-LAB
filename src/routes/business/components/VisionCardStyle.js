import styled from 'styled-components';
import palette from '@styles/theme';

export const Card = styled.div`
  width: 240px;
  height: 269px;
  padding: 35px 30px;
  border-radius: 18px;
  background: ${palette.background.white};
  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Icon = styled.img`
  width: 72px;
  height: 72px;
`;

export const CardTitle = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${palette.text.primary};
  margin-top: 4px;
`;

export const CardBody = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  color: ${palette.text.body};
`;
