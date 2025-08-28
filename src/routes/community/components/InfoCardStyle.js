import styled from 'styled-components';
import palette from '@styles/theme';

export const InfoCard = styled.div`
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 20px;
  border: 1px solid ${palette.hover.back2};
  background: ${palette.background.white};
`;

export const Title = styled.p`
  color: ${palette.text.primary};

  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.5px;

  margin: 0;
`;

export const Date = styled.p`
  color: ${palette.text.secondary};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;

  margin: 0;
`;

export const Content = styled.p`
  color: ${palette.text.body};
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;

  white-space: pre-wrap;
`;
