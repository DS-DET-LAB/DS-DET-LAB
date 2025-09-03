/**
 * TabletMenu 컴포넌트는 태블릿 해상도에서 보여지는 사이드 메뉴입니다.
 *
 * 하위 메뉴 항목(SubTitle, Content)을 클릭하면 해당 페이지의 특정 섹션으로 스크롤되거나
 * 관련 페이지로 이동합니다.
 *
 * @param {function} closeMenu - 메뉴를 닫는 함수 (상위 Header에서 전달됨)
 * @returns {JSX.Element} 태블릿 네비게이션 메뉴 UI
 *
 * @example
 * <TabletMenu closeMenu={함수} />
 *
 * @author 목소연
 */

import { useNavigate, useLocation } from 'react-router-dom';
import * as T from '@components/menu/tabletMenuStyle';
import icClose from '@assets/common/ic-close-40.svg';
import logo from '@assets/logo/logo-simple.svg';
import menuItemsData from '@db/menuItem.json';

const TabletMenu = ({ closeMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (itemPath, itemHash) => {
    if (location.pathname === itemPath) {
      if (itemHash) {
        const element = document.getElementById(itemHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      const targetPath = itemHash ? `${itemPath}#${itemHash}` : itemPath;
      navigate(targetPath);
      setTimeout(() => {
        if (itemHash) {
          const element = document.getElementById(itemHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    }
    closeMenu();
  };

  return (
    <T.BackContainer>
      <T.MenuContainer>
        <T.Close onClick={closeMenu}>
          <img src={icClose} alt="닫기" />
        </T.Close>
        <T.Logo
          src={logo}
          alt="메인페이지"
          onClick={() => {
            navigate('/');
            closeMenu();
          }}
        />{' '}
        <T.MenuList>
          <T.MenuTitle>센터 소개</T.MenuTitle>
          <T.MenuSubList>
            {menuItemsData.center.map((item, idx) => {
              const Component = item.type === 'subtitle' ? T.SubTitle : T.Content;
              return (
                <Component key={idx} onClick={() => handleItemClick(item.path, item.hash)}>
                  {item.name}
                </Component>
              );
            })}
          </T.MenuSubList>
          <T.MenuTitle>사업 안내</T.MenuTitle>
          <T.MenuSubList>
            {menuItemsData.business.map((item, idx) => {
              const Component = item.type === 'subtitle' ? T.SubTitle : T.Content;
              return (
                <Component key={idx} onClick={() => handleItemClick(item.path, item.hash)}>
                  {item.name}
                </Component>
              );
            })}
          </T.MenuSubList>
          <T.MenuTitle>사업 활동</T.MenuTitle>
          <T.MenuSubList>
            {menuItemsData.activity.map((item, idx) => {
              const Component = item.type === 'subtitle' ? T.SubTitle : T.Content;
              return (
                <Component key={idx} onClick={() => handleItemClick(item.path, item.hash)}>
                  {item.name}
                </Component>
              );
            })}
          </T.MenuSubList>
          <T.MenuTitle>커뮤니티</T.MenuTitle>
          <T.MenuSubList>
            {menuItemsData.community.map((item, idx) => {
              return (
                <T.SubTitle key={idx} onClick={() => handleItemClick(item.path, item.hash)}>
                  {item.name}
                </T.SubTitle>
              );
            })}
          </T.MenuSubList>
        </T.MenuList>
      </T.MenuContainer>
    </T.BackContainer>
  );
};

export default TabletMenu;
