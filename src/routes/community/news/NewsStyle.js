import styled from 'styled-components';
import palette from '@styles/theme';

export const News = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const ItemGroup = styled.div`
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

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialBox = styled.a`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  background: ${palette.background.white};

  box-shadow: 0 0 15px 0 rgba(18, 32, 102, 0.1);

  width: 228px;

  color: ${palette.mainNavy.navy100};
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.5px;
`;

export const SocialIcon = styled.img`
  width: 45px;
`;

export const External = styled.img`
  width: 45px;
  border: 1px solid ${palette.mainNavy.navy10};
  border-radius: 50px;
`;
