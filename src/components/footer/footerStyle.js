import styled from 'styled-components';
import palette from '@styles/theme';

export const FooterContainer = styled.footer`
  --horizontal-padding: clamp(20px, 18vw, 340px);
  --vertical-padding: 80px;

  background-color: #1a1f2b;
  color: ${palette.background.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 34px;
  @media (max-width: 767px) {
    gap: 20px;
    --horizontal-padding: 20px;
    --vertical-padding: 30px;
  }
  width: calc(100% - (var(--horizontal-padding) * 2));
  padding: var(--vertical-padding) var(--horizontal-padding);
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media (max-width: 767px) {
    gap: 5px;
  }
`;

export const FooterTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.5px;
  @media (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;

export const FooterSubTitle = styled.div`
  color: ${palette.background.white50};
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;
  @media (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;

export const InfoText = styled.div`
  color: ${palette.background.white50};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
  @media (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;

export const LinkButton = styled.button`
  background-color: #20232e;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  width: fit-content;
  margin-top: 16px;

  &:hover {
    background-color: #2c2f3a;
  }
`;

export const Copyright = styled.div`
  color: ${palette.background.white80};
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.35px;
  }
`;

export const Website = styled.div`
  color: ${palette.background.white50};
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
  @media (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.35px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.text.secondary};
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  @media (max-width: 767px) {
    width: unset;
    height: unset;
    gap: 4px;
    padding: 3px 10px;
    border-radius: 37px;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.3px;
  }
  &:hover {
    background-color: ${palette.hover.footer1};
  }
`;
