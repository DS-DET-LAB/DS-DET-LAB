import styled from 'styled-components';
import palette from '@styles/theme';

export const Card = styled.div`
  width: 240px;
  height: 242px;
  padding: 35px 30px;
  border-radius: 18px;
  background: ${palette.background.white};
  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  &:first-of-type {
    height: 269px;
  }

  @media (max-width: 767px) {
    width: 90%;
    height: fit-content;
    padding: 16px 20px;
    border-radius: 14px;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const Icon = styled.img`
  width: 72px;
  height: 72px;

  @media (min-width: 768px) and (max-width: 899px) {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 767px) {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }
`;

export const CardTitle = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${palette.text.primary};
  margin-top: 4px;

  @media (max-width: 767px) {
    font-size: 14px;
    margin-top: 0;
  }
`;

export const CardBody = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  color: ${palette.text.body};

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;
