import styled from 'styled-components';
import palette from '@styles/theme';

export const BackContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuContainer = styled.div`
  width: calc(80% - 100px);
  height: calc(100% - 12px);
  background: linear-gradient(0deg, rgba(18, 32, 102, 0.1) 0%, rgba(18, 32, 102, 0.1) 100%), #fff;
  box-shadow: -4px 0 20px 0 rgba(0, 0, 0, 0.25);
  padding: 12px 20px 0;
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 24px;
    height: auto;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 92px;
  height: auto;
  margin-top: 28px;
  cursor: pointer;
`;

export const MenuList = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InnerContainer = styled.div`
  border-radius: 10px;
  background-color: ${({ $isOpenAccordion }) => ($isOpenAccordion ? palette.background.white50 : 'unset')};
`;

export const MenuTitle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  color: ${palette.text.primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.35px;
  background-color: ${({ $isOpenAccordion }) => ($isOpenAccordion ? palette.mainNavy.navy10 : 'unset')};
  border-radius: 10px;
`;

export const ArrowIcon = styled.img`
  width: 16px;
  height: auto;
  transition: transform 0.3s ease;
  transform: ${({ $isOpenAccordion }) => ($isOpenAccordion ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const MenuSubList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitle = styled.div`
  padding: 10px 18px;
  color: ${palette.text.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;
  cursor: pointer;
  transition: 300ms ease;
  &:hover {
    border-radius: 10px;
    background: ${palette.hover.back2};
  }
`;

export const Content = styled.div`
  padding: 10px 26px;
  color: ${palette.text.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;
  cursor: pointer;
  transition: 300ms ease;
  &:hover {
    border-radius: 10px;
    background: ${palette.hover.back2};
  }
`;
