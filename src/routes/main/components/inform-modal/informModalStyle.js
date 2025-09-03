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
  padding: ${({ $viewport }) => ($viewport === 'mobile' ? '30px' : '75px')};
  border-radius: 17px;
  background-color: ${palette.background.white};
  box-shadow: ${({ $viewport }) =>
    $viewport === 'mobile' ? `0 0 10px 0 ${palette.mainNavy.navy15}` : `0 0 100px 0 ${palette.mainNavy.navy15}`};
`;

export const CloseButton = styled.img`
  position: absolute;
  right: ${({ $viewport }) => ($viewport === 'mobile' ? '15px' : '20px')};
  top: ${({ $viewport }) => ($viewport === 'mobile' ? '15px' : '20px')};
  width: ${({ $viewport }) => ($viewport === 'mobile' ? '24px' : '40px')};
  height: auto;
  aspect-ratio: 1 / 1;
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
  gap: ${({ $viewport }) => ($viewport === 'mobile' ? '3px' : '5px')};
`;

export const CenterTitle = styled.div`
  color: ${palette.text.secondary};
  /* r18 & r14 */
  font-size: ${({ $viewport }) => ($viewport === 'mobile' ? '14px' : '18px')};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: ${({ $viewport }) => ($viewport === 'mobile' ? '-0.35px' : '-0.45px')};
`;

export const CenterDetail = styled.div`
  display: flex;
  padding: ${({ $viewport }) => ($viewport === 'mobile' ? '0' : '0 7px')};
  align-items: center;
  gap: 5px;
`;

export const CenterIcon = styled.img`
  width: ${({ $viewport }) => ($viewport === 'mobile' ? '16px' : '24px')};
  height: auto;
  aspect-ratio: 1 / 1;
`;

export const CenterText = styled.div`
  color: ${palette.text.primary};
  font-size: ${({ $viewport }) => ($viewport === 'mobile' ? '14px' : '18px')};
  font-weight: ${({ $viewport }) => ($viewport === 'mobile' ? '500' : '400')};
  line-height: ${({ $viewport }) => ($viewport === 'mobile' ? '130%' : '150%')};
  letter-spacing: ${({ $viewport }) => ($viewport === 'mobile' ? '-0.35px' : '-0.45px')};
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $viewport }) => ($viewport === 'mobile' ? '10px' : '15px')};
`;

export const ContactFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactLine = styled.div`
  width: 3px;
  height: ${({ $viewport }) => ($viewport === 'mobile' ? '44px' : '56px')};
  background-color: ${palette.text.secondary50};
`;

export const ContactTitle = styled.div`
  color: ${palette.text.primary};
  font-size: ${({ $viewport }) => ($viewport === 'mobile' ? '14px' : '18px')};
  font-weight: 600;
  line-height: ${({ $viewport }) => ($viewport === 'mobile' ? '130%' : '150%')};
  letter-spacing: ${({ $viewport }) => ($viewport === 'mobile' ? '-0.35px' : '-0.45px')};
`;

export const ContactText = styled.div`
  color: #6b7684;
  font-size: ${({ $viewport }) => ($viewport === 'mobile' ? '14px' : '16px')};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: ${({ $viewport }) => ($viewport === 'mobile' ? '-0.35px' : '-0.4px')};
`;

export const Highlight = styled.span`
  color: ${palette.text.secondary};
`;
