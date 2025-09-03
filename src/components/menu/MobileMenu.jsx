/**
 * MobileMenu 컴포넌트는 모바일 해상도에서 보여지는 아코디언 형태의 사이드 메뉴입니다.
 * 각 메뉴 타이틀을 클릭하면 하위 메뉴가 펼쳐지고, 다시 클릭하면 접히는 방식입니다.
 *
 * 하위 메뉴 항목(SubTitle, Content)을 클릭하면 해당 페이지의 특정 섹션으로 스크롤되거나
 * 관련 페이지로 이동합니다.
 *
 * @param {function} closeMenu - 메뉴를 닫는 함수 (상위 Header에서 전달됨)
 * @returns {JSX.Element} 모바일 네비게이션 메뉴 UI
 *
 * @example
 * <MobileMenu closeMenu={함수} />
 *
 * @author 목소연
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M from '@components/menu/mobileMenuStyle';
import icClose from '@assets/common/ic-close-40.svg';
import logo from '@assets/logo/logo-simple.svg';
import icArrow from '@assets/activity/ic-chevron-gray-24.svg';
import menuItemsData from '@db/menuItem.json';

const MobileMenu = ({ closeMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (menuName) => {
    setOpenAccordion((prev) => (prev === menuName ? null : menuName));
  };

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
    <M.BackContainer>
      <M.MenuContainer>
        <M.Close onClick={closeMenu}>
          <img src={icClose} alt="닫기" />
        </M.Close>
        <M.Logo
          src={logo}
          alt="메인페이지"
          onClick={() => {
            navigate('/');
            closeMenu();
          }}
        />
        <M.MenuList>
          <M.InnerContainer $isOpenAccordion={openAccordion === 'center'}>
            <M.MenuTitle onClick={() => handleAccordionClick('center')} $isOpenAccordion={openAccordion === 'center'}>
              센터 소개 <M.ArrowIcon src={icArrow} alt="더보기" $isOpenAccordion={openAccordion === 'center'} />
            </M.MenuTitle>
            {openAccordion === 'center' && (
              <M.MenuSubList>
                {menuItemsData.center.map((item, idx) => {
                  const Component = item.type === 'subtitle' ? M.SubTitle : M.Content;
                  return (
                    <Component key={idx} onClick={() => handleItemClick(item.path, item.hash)}>
                      {item.name}
                    </Component>
                  );
                })}
              </M.MenuSubList>
            )}
          </M.InnerContainer>
          <M.InnerContainer $isOpenAccordion={openAccordion === 'business'}>
            <M.MenuTitle
              onClick={() => handleAccordionClick('business')}
              $isOpenAccordion={openAccordion === 'business'}>
              사업 안내 <M.ArrowIcon src={icArrow} alt="더보기" $isOpenAccordion={openAccordion === 'business'} />
            </M.MenuTitle>
            {openAccordion === 'business' && (
              <M.MenuSubList>
                {menuItemsData.business.map((item, idx) => {
                  const Component = item.type === 'subtitle' ? M.SubTitle : M.Content;
                  return (
                    <Component key={idx} onClick={() => handleItemClick(item.path, item.hash)}>
                      {item.name}
                    </Component>
                  );
                })}
              </M.MenuSubList>
            )}
          </M.InnerContainer>
          <M.InnerContainer $isOpenAccordion={openAccordion === 'activity'}>
            <M.MenuTitle
              onClick={() => handleAccordionClick('activity')}
              $isOpenAccordion={openAccordion === 'activity'}>
              사업 활동 <M.ArrowIcon src={icArrow} alt="더보기" $isOpenAccordion={openAccordion === 'activity'} />
            </M.MenuTitle>
            {openAccordion === 'activity' && (
              <M.MenuSubList>
                {menuItemsData.activity.map((item, idx) => {
                  const Component = item.type === 'subtitle' ? M.SubTitle : M.Content;
                  return (
                    <Component key={idx} onClick={() => handleItemClick(item.path, item.hash)}>
                      {item.name}
                    </Component>
                  );
                })}
              </M.MenuSubList>
            )}
          </M.InnerContainer>
          <M.InnerContainer $isOpenAccordion={openAccordion === 'community'}>
            <M.MenuTitle
              onClick={() => handleAccordionClick('community')}
              $isOpenAccordion={openAccordion === 'community'}>
              커뮤니티 <M.ArrowIcon src={icArrow} alt="더보기" $isOpenAccordion={openAccordion === 'community'} />
            </M.MenuTitle>
            {openAccordion === 'community' && (
              <M.MenuSubList>
                {menuItemsData.community.map((item, idx) => {
                  return (
                    <M.SubTitle key={idx} onClick={() => handleItemClick(item.path, item.hash)}>
                      {item.name}
                    </M.SubTitle>
                  );
                })}
              </M.MenuSubList>
            )}
          </M.InnerContainer>
        </M.MenuList>
      </M.MenuContainer>
    </M.BackContainer>
  );
};

export default MobileMenu;
