import styled from 'styled-components';
import palette from '@styles/theme';

export const DataCard = styled.div`
  border-radius: 17px;
  border: 1px solid ${palette.hover.back2};
  padding: 30px 25px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 767px) {
    padding: 20px;
    align-items: flex-end;
  }

  svg {
    cursor: pointer;
  }
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 767px) {
    gap: 5px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 767px) {
    gap: 5px;
  }
`;

export const Type = styled.div`
  border-radius: 30px;
  background-color: ${palette.mainNavy.navy10};

  padding: 5px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${palette.text.secondary};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;

  @media (max-width: 767px) {
    padding: 3px 8px;

    font-size: 12px;
    letter-spacing: -0.3px;
  }
`;

export const Date = styled.div`
  color: ${palette.text.secondary};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;

  @media (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;

export const Title = styled.p`
  margin: 0;
  color: ${palette.text.primary};

  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.5px;

  @media (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: ${palette.mainNavy.navy10};
`;
