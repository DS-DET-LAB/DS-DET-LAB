/**
 * CommunityHeader 컴포넌트
 *
 * 태블릿, 모바일일 때 렌더링 되는 헤더 컴포넌트이며 사용할 때 태블릿, 모바일인지 조건을 추가해야 합니다.
 * 커뮤니티 내 자료실, 공지사항, 센터소식 페이지에서 사용 가능하며,
 * url 경로에 따라 알아서 해당하는 메뉴가 화면에 렌더링 됩니다.
 *
 * @example
 * {(isTablet || isMobile) && <CommunityHeader />}
 *
 * @author 김진효
 */

import { useLocation } from 'react-router-dom';
import useMediaQuery from '@hooks/useMediaQuery';

import SlashIcon from '@assets/community/ic-slash.svg?react';

import * as C from './CommunityHeaderStyle';

const CommunityHeader = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 767px)');

  const title = {
    '/community/data': '자료실',
    '/community/info': '공지사항',
    '/community/news': '센터소식',
  };

  return (
    <C.Header $isMobile={isMobile}>
      <C.Menu $isMobile={isMobile}>홈</C.Menu>
      <SlashIcon />

      <C.Menu $isMobile={isMobile}>커뮤니티</C.Menu>
      <C.Arrow $isMobile={isMobile} />
      <SlashIcon />

      <C.Menu $isMobile={isMobile}>{title[location.pathname]}</C.Menu>
      <C.Arrow $isMobile={isMobile} />
    </C.Header>
  );
};

export default CommunityHeader;
