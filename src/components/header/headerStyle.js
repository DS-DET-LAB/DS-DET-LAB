import styled from 'styled-components';
import palette from '@styles/theme';

export const HeaderContainer = styled.header`
  --horizontal-padding: clamp(20px, 6vw, 80px);
  --vertical-padding: 16px;
  @media (min-width: 768px) and (max-width: 899px) {
    --horizontal-padding: 40px;
    --vertical-padding: 14px;
  }
  @media (max-width: 767px) {
    --horizontal-padding: 20px;
    --vertical-padding: 10px;
  }

  width: calc(100% - (var(--horizontal-padding) * 2));
  padding: var(--vertical-padding) var(--horizontal-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    @media (min-width: 768px) and (max-width: 899px) {
      width: 241px;
      height: auto;
    }
    @media (max-width: 767px) {
      width: 66px;
      height: auto;
    }
  }
`;

export const RightSection = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.5px;
  color: ${({ $isActive, $isActiveMenu }) => {
    if ($isActive) return palette.text.primary;
    if ($isActiveMenu) return palette.mainNavy.navy100;
    return 'inherit';
  }};
  cursor: pointer;
  transition: 300ms ease;
  border-radius: 5px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    border-radius: 22.5px;
    background-color: ${palette.text.primary};
    transition: width 0.3s ease-in-out;
  }
  &:hover {
    background-color: ${palette.hover.back1};
    color: ${palette.mainNavy.navy100};
    &::after {
      background-color: ${palette.mainNavy.navy100};
    }
  }
`;

export const MenuBtn = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 24px;
    height: 24px;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
