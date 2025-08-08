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
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
