/**
 * @author 김진효, 목소연
 */

import { useLocation } from 'react-router-dom';
import useMediaQuery from '@hooks/useMediaQuery';
import SlashIcon from '@assets/community/ic-slash.svg?react';
import * as C from '@components/breadcrumb/breadcrumbStyle';
import menuItemsData from '@db/menuItem.json';

const topLevelPaths = {
  '/center': '센터 소개',
  '/business': '사업 안내',
  '/activity': '사업 활동',
  '/community': '커뮤니티',
};

const Breadcrumb = ({ headerHeight, activeSectionId }) => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 767px)');

  let currentTopLevelName = '';
  for (const pathPrefix in topLevelPaths) {
    if (location.pathname.startsWith(pathPrefix)) {
      currentTopLevelName = topLevelPaths[pathPrefix];
      break;
    }
  }

  let currentMenuItemName = '';
  let currentCategoryKey = '';
  if (location.pathname.startsWith('/center')) {
    currentCategoryKey = 'center';
  } else if (location.pathname.startsWith('/business')) {
    currentCategoryKey = 'business';
  } else if (location.pathname.startsWith('/activity')) {
    currentCategoryKey = 'activity';
  } else if (location.pathname.startsWith('/community')) {
    currentCategoryKey = 'community';
  }

  const itemsInCurrentCategory = menuItemsData[currentCategoryKey] || [];

  const communityMap = {
    '/community/info': '공지사항',
    '/community/data': '자료실',
    '/community/news': '센터 소식',
  };

  if (currentCategoryKey === 'community' && communityMap[location.pathname]) {
    currentMenuItemName = communityMap[location.pathname];
  } else if (activeSectionId) {
    const foundByActiveSection = itemsInCurrentCategory.find((item) => {
      return item.path === location.pathname && item.hash === activeSectionId;
    });
    if (foundByActiveSection) {
      currentMenuItemName = foundByActiveSection.name;
    }
  }
  if (!currentMenuItemName && location.hash) {
    const urlHash = location.hash.substring(1);
    const foundByUrlHash = itemsInCurrentCategory.find((item) => {
      return item.path === location.pathname && item.hash === urlHash;
    });
    if (foundByUrlHash) {
      currentMenuItemName = foundByUrlHash.name;
    }
  }

  return (
    <C.Header $isMobile={isMobile} $headerHeight={headerHeight}>
      <C.Menu $isMobile={isMobile}>홈</C.Menu>
      {currentTopLevelName && (
        <>
          <SlashIcon />
          <C.Menu $isMobile={isMobile}>{currentTopLevelName}</C.Menu>
        </>
      )}
      {/* <C.Arrow $isMobile={isMobile} /> */}
      {currentMenuItemName && (
        <>
          <SlashIcon />
          <C.Menu $isMobile={isMobile}>{currentMenuItemName}</C.Menu>
        </>
      )}
      {/* <C.Arrow $isMobile={isMobile} /> */}
    </C.Header>
  );
};

export default Breadcrumb;
