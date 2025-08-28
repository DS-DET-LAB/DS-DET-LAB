import styled from 'styled-components';
import palette from '@styles/theme';

export const News = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Title = styled.div`
  color: ${palette.mainNavy.navy100};

  font-size: 36px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.9px;

  margin-bottom: -20px;
`;
