import styled from 'styled-components';
import palette from '@styles/theme';

export const Background = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: ${palette.background.black25};
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  padding: 75px;
  border-radius: 17px;
  background-color: ${palette.background.white};
  box-shadow: 0 0 100px 0 ${palette.mainNavy.navy15};
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

export const ContentConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const CenterInformContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const CenterFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CenterTitle = styled.div`
  color: ${palette.text.secondary};
  /* r18 */
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;
`;

export const CenterDetail = styled.div`
  display: flex;
  padding: 0 7px;
  align-items: center;
  gap: 5px;
`;

export const CenterIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CenterText = styled.div`
  color: ${palette.text.primary};
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ContactFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactLine = styled.div`
  width: 3px;
  height: 56px;
  background-color: ${palette.text.secondary50};
`;

export const ContactTitle = styled.div`
  color: ${palette.text.primary};
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.45px;
`;

export const ContactText = styled.div`
  color: #6b7684;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
`;

export const Highlight = styled.span`
  color: ${palette.text.secondary};
`;
