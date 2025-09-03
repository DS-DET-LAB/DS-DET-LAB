import styled from 'styled-components';
import palette from '@styles/theme';

export const Card = styled.div`
  flex: 1;
  padding: 35px;
  border-radius: 16px;
  background: ${palette.background.white};
  border: 1px solid ${palette.hover.back2};
  align-self: flex-start;
  outline: none;
  cursor: pointer;
  box-shadow: ${({ $isOpen }) => ($isOpen ? `0 0 15px 0 ${palette.mainNavy.navy10}` : 'none')};

  &:hover {
    box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
    transition: transform 0.3s ease;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 7.5px;

  @media (max-width: 767px) {
    font-size: 16px;
    margin: 0 0 7px;
  }
`;

export const Desc = styled.p`
  margin: 0;
  color: ${palette.text.body};

  @media (min-width: 768px) and (max-width: 899px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const LineIcon = styled.img``;

export const Wrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

export const PWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;

export const Content = styled.p`
  color: ${palette.text.body};
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Chevron = styled.img`
  flex-shrink: 0;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
