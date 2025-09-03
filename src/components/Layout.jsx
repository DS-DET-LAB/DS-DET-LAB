/**
 * 전체 페이지의 공통 레이아웃을 정의하는 Layout 컴포넌트 입니다.
 * Header, Banner, Footer는 모든 페이지에서 고정으로 렌더링되며,
 * <Outlet />은 react-router-dom의 중첩 라우팅을 통해 각 페이지 콘텐츠가 삽입되는 영역입니다.
 *
 * @component Layout
 * @returns {JSX.Element} 전체 페이지의 공통 구조를 포함한 레이아웃 컴포넌트
 *
 * @example
 * // App.jsx
 * <Route path="/" element={<Layout />}>
 *   <Route index element={<Main />} />
 * </Route>
 *
 * @author 목소연
 */

import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Banner from '@components/banner/Banner';
import ScrollToTopButton from '@components/scroll/ScrollToTopButton';
import DesktopMenu from '@components/menu/DesktopMenu';
import { Outlet, useLocation } from 'react-router-dom';
import useMediaQuery from '@hooks/useMediaQuery';

const Layout = () => {
  const location = useLocation();
  const showDesktopMenu = location.pathname !== '/';
  const isDesktop = useMediaQuery('(min-width: 899px)');

  return (
    <>
      <Header />
      <Banner />
      <main
        style={{
          display: isDesktop ? 'grid' : 'unset',
          gridTemplateColumns: showDesktopMenu ? '280px 1fr' : '1fr',
          maxWidth: '100vw',
          margin: showDesktopMenu ? '100px auto' : 0,
          padding: showDesktopMenu ? '0 60px' : 0,
        }}>
        {showDesktopMenu && <DesktopMenu />}
        <div style={{ minWidth: 0 }}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
