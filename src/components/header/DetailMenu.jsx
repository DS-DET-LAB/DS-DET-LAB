/**
 * DetailMenu 컴포넌트는 Header에서 마우스 호버 시 나타나는 서브 메뉴입니다.
 * 각 메뉴 유형(`center`, `business`, `activity`, `community`)에 따라 다른 하위 항목 리스트를 보여줍니다.
 *
 * [주의] 메뉴 아이템 클릭 시 특정 섹션으로 스크롤 이동 기능을 사용하려면,
 * `menuItems` 내 각 항목의 `hash` 값은 해당 라우트 페이지 컴포넌트(예: Center.jsx)에서
 * 목표하는 DOM 요소의 `id` 속성 값과 일치해야 합니다.
 *
 * @component DetailMenu
 * @param {string} type - 보여줄 상세 메뉴의 유형 ('center' | 'business' | 'activity' | 'community')
 * @example
 * <DetailMenu type="center" />
 *
 * @author 목소연
 */

import * as D from '@components/header/detailMenuStyle';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = {
  center: [
    { name: '인사말', path: '/center', hash: 'greeting' },
    { name: '비전/소개', path: '/center', hash: 'vision' },
    { name: '조직도 및 구성원', path: '/center', hash: 'organization' },
  ],
  business: [
    { name: '사업 개요', path: '/business', hash: 'overview' },
    { name: '사업 소개', path: '/business', hash: 'introduction' },
  ],
  activity: [
    { name: '활동 계획', path: '/activity', hash: 'plan' },
    { name: '성과', path: '/activity', hash: 'results' },
  ],
  community: [
    { name: '공지사항', path: '/community/info' },
    { name: '자료실', path: '/community/data' },
    { name: '센터 소식', path: '/community/news' },
  ],
};

const DetailMenu = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (itemPath, itemHash) => {
    if (location.pathname === itemPath) {
      const element = document.getElementById(itemHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(`${itemPath}#${itemHash}`);
    }
  };

  return (
    <D.Container>
      {menuItems[type]?.map((item, idx) => (
        <D.Item key={idx} onClick={() => handleMenuItemClick(item.path, item.hash)}>
          {item.name}
        </D.Item>
      ))}
    </D.Container>
  );
};

export default DetailMenu;
