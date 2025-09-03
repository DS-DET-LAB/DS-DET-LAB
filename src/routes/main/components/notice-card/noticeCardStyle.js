import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import palette from '@styles/theme';

export const Container = styled(Fade)`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: ${({ viewport }) => viewport != 'mobile' && '1'};
  width: ${({ viewport }) => viewport === 'mobile' && '100%'};
  min-width: ${({ viewport }) => (viewport === 'mobile' ? '100%' : '295px')};
  max-width: ${({ viewport }) => (viewport === 'mobile' ? '100%' : '295px')};
  box-sizing: border-box;
  padding: ${({ viewport }) => (viewport === 'mobile' ? '20px' : '35px')};
  gap: 17px;
  border-radius: 10px;
  border: 1px solid ${palette.hover.back2};
  background-color: ${palette.background.white};
  cursor: pointer;
  transition: 300ms ease;

  &:hover {
    box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
  }

  &:active {
    background-color: ${palette.hover.back1};
  }

  @media (min-width: 1920px) {
    max-width: 100%;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.div`
  width: 100%;
  color: ${palette.text.primary};
  /* s24 & s16 */
  font-size: ${({ viewport }) => (viewport === 'mobile' ? '16px' : '24px')};
  font-weight: 600;
  line-height: 130%;
  letter-spacing: ${({ viewport }) => (viewport === 'mobile' ? '-0.4px' : '-0.6px')};
  transition: 300ms ease;

  ${Container}:hover & {
    color: ${palette.mainNavy.navy100};
  }
`;

export const Date = styled.div`
  color: ${palette.text.body};
  /* r18 & m16 */
  font-size: ${({ viewport }) => (viewport === 'mobile' ? '16px' : ' 18px')};
  font-weight: ${({ viewport }) => (viewport === 'mobile' ? '500' : ' 400')};
  line-height: 150%;
  letter-spacing: ${({ viewport }) => (viewport === 'mobile' ? '-0.4px' : '-0.45px')};
`;

export const Content = styled.div`
  width: 100%;
  color: ${palette.text.body};
  /* r18 & r14 */
  font-size: ${({ viewport }) => (viewport === 'mobile' ? '14px' : ' 18px')};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: ${({ viewport }) => (viewport === 'mobile' ? '-0.35px' : '-0.45px')};

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-line-clamp: ${({ viewport }) => (viewport === 'mobile' ? 2 : 5)};
`;
