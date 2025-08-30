import styled, { keyframes } from 'styled-components';
import palette from '@styles/theme';

const shimmer = keyframes`
  to {
    background-position-x: 0%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ viewport }) => (viewport === 'mobile' ? '8px' : '52px')};
  padding: ${({ viewport }) => (viewport === 'mobile' ? '50px 0' : '120px 0 100px')};
`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const SloganText = styled.div`
  color: ${palette.mainNavy.navy100};
  font-size: ${({ viewport }) => (viewport === 'mobile' ? '14px' : viewport === 'tablet' ? '32px' : '44px')};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: ${({ viewport }) =>
    viewport === 'mobile' ? '-0.35px' : viewport === 'tablet' ? '-0.8px' : '-1.1px'};
`;

export const Highlight = styled.span`
  background: linear-gradient(
    -45deg,
    ${palette.mainNavy.navy100} 40%,
    ${palette.mainNavy.navy50} 50%,
    ${palette.mainNavy.navy100} 60%
  );
  background-size: 300%;
  background-position-x: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 1.5s infinite linear;

  font-size: ${({ viewport }) => (viewport === 'mobile' ? '14px' : viewport === 'tablet' ? '36px' : '48px')};
  font-weight: 700;
  line-height: 150%;
  letter-spacing: ${({ viewport }) =>
    viewport === 'mobile' ? '-0.35px' : viewport === 'tablet' ? '-0.9px' : '-1.2px'};
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: ${({ viewport }) => (viewport === 'mobile' ? '50px' : '150px')};
  background: linear-gradient(rgba(159, 164, 192, 0) 0%, #9fa4c0 45%, rgba(159, 164, 192, 0) 100%);
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LogoMain = styled.img`
  width: ${({ viewport }) => (viewport === 'mobile' ? '139px' : viewport === 'tablet' ? '28vw' : '358px')};
  height: auto;
`;

export const LogoSub = styled.img`
  width: ${({ viewport }) => (viewport === 'mobile' ? '205px' : viewport === 'tablet' ? '41vw' : '526px')};
  height: auto;
`;
