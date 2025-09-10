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

import React, { useState, useEffect, useRef } from 'react';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Banner from '@components/banner/Banner';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';
import ScrollToTopButton from '@components/scroll/ScrollToTopButton';
import DesktopMenu from '@components/menu/DesktopMenu';
import { Outlet, useLocation } from 'react-router-dom';
import useMediaQuery from '@hooks/useMediaQuery';

const Layout = () => {
  const location = useLocation();
  const showDesktopMenu = location.pathname !== '/';
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 899px)');
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState('');

  useEffect(() => {
    if (headerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const contentHeight = entry.contentRect.height;

          let verticalPadding = 0;
          if (isMobile) {
            verticalPadding = 10;
          } else if (isTablet) {
            verticalPadding = 14;
          } else {
            verticalPadding = 16;
          }

          setHeaderHeight(contentHeight + verticalPadding * 2);
        }
      });
      resizeObserver.observe(headerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      },
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header ref={headerRef} />
      <Banner />
      {showDesktopMenu && !isDesktop && <Breadcrumb headerHeight={headerHeight} activeSectionId={activeSectionId} />}
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
