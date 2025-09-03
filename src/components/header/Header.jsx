/**
 * 상단 네비게이션 바 역할을 수행하는 Header 컴포넌트입니다.
 * PC/태블릿/모바일 화면 크기에 따라 다른 메뉴 레이아웃을 렌더링하며,
 * 메뉴에 마우스를 올리면 해당 상세 메뉴를 보여주고, 모바일에서는 햄버거 메뉴 형태로 전환됩니다.
 *
 * @component Header
 * @example
 * <Header />
 *
 * @author 목소연
 */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useMediaQuery from '@hooks/useMediaQuery';
import * as H from '@components/header/headerStyle';
import topbarLogo from '@assets/logo/logo-topbar.svg';
import simpleLogo from '@assets/logo/logo-simple.svg';
import icMenu from '@assets/common/ic-menu-24.svg';
import DetailMenu from '@components/header/DetailMenu';
import MobileMenu from '@components/menu/MobileMenu';
import TabletMenu from '@components/menu/TabletMenu';

const Header = React.forwardRef((props, ref) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 899px)');
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (menuName) => setActiveMenu(menuName);
  const handleMouseLeave = () => setActiveMenu(null);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <H.HeaderContainer onMouseLeave={handleMouseLeave} ref={ref}>
      <H.LeftSection>
        <img src={isMobile ? simpleLogo : topbarLogo} alt="디지털교육공학센터 로고" onClick={() => navigate('/')} />
      </H.LeftSection>
      <H.RightSection>
        {isTablet || isMobile ? (
          <>
            <H.MenuBtn onClick={handleMenu}>
              <img src={icMenu} alt="메뉴" />
            </H.MenuBtn>
            {isMenuOpen && (isMobile ? <MobileMenu closeMenu={closeMenu} /> : <TabletMenu closeMenu={closeMenu} />)}
          </>
        ) : (
          <>
            <H.NavWrapper onMouseEnter={() => handleMouseEnter('center')}>
              <H.NavItem
                $isActive={currentPath === '/center'}
                $isActiveMenu={activeMenu === 'center'}
                onClick={() => navigate('/center')}>
                센터 소개
              </H.NavItem>
              {activeMenu === 'center' && <DetailMenu type="center" />}
            </H.NavWrapper>
            <H.NavWrapper onMouseEnter={() => handleMouseEnter('business')}>
              <H.NavItem
                $isActive={currentPath === '/business'}
                $isActiveMenu={activeMenu === 'business'}
                onClick={() => navigate('/business')}>
                사업 안내
              </H.NavItem>
              {activeMenu === 'business' && <DetailMenu type="business" />}
            </H.NavWrapper>
            <H.NavWrapper onMouseEnter={() => handleMouseEnter('activity')}>
              <H.NavItem
                $isActive={currentPath === '/activity'}
                $isActiveMenu={activeMenu === 'activity'}
                onClick={() => navigate('/activity')}>
                사업 활동
              </H.NavItem>
              {activeMenu === 'activity' && <DetailMenu type="activity" />}
            </H.NavWrapper>
            <H.NavWrapper onMouseEnter={() => handleMouseEnter('community')}>
              <H.NavItem
                $isActive={
                  currentPath === '/community/info' ||
                  currentPath === '/community/news' ||
                  currentPath === '/community/data'
                }
                $isActiveMenu={activeMenu === 'community'}
                onClick={() => navigate('/community/info')}>
                커뮤니티
              </H.NavItem>
              {activeMenu === 'community' && <DetailMenu type="community" />}
            </H.NavWrapper>
          </>
        )}
      </H.RightSection>
    </H.HeaderContainer>
  );
});

export default Header;
