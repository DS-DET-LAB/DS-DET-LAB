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
