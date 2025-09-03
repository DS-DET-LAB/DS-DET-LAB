import styled from 'styled-components';
import palette from '@styles/theme';

export const Card = styled.div`
  display: flex;
  align-items: center;
  background: ${palette.background.white};
  border-radius: 13px;
  box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
  width: 240px;
  padding: 20px;
  gap: 12px;

  @media (min-width: 768px) and (max-width: 899px) {
    width: 190px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;

  @media (max-width: 767px) {
    border-left: 1px solid ${palette.hover.back2};
    padding: 16px;
  }
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 899px) {
    font-size: 14px;
  }
`;

export const Role = styled.span`
  color: ${palette.text.secondary};
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 899px) {
    font-size: 14px;
  }
`;

export const PhoneRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${palette.text.body};
`;

export const PhoneIcon = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 899px) {
    width: 16px;
    height: 16px;
  }
`;

export const PhoneText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ $muted }) => ($muted ? '#8C8F92' : '#000')};

  @media (max-width: 899px) {
    font-size: 14px;
  }
`;
