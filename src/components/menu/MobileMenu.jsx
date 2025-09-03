/**
 * MobileMenu 컴포넌트는 모바일 해상도에서 보여지는 아코디언 형태의 사이드 메뉴입니다.
 * 각 메뉴 타이틀을 클릭하면 하위 메뉴가 펼쳐지고, 다시 클릭하면 접히는 방식입니다.
 *
 * @param {function} closeMenu - 메뉴를 닫는 함수 (상위 Header에서 전달됨)
 * @returns {JSX.Element} 모바일 네비게이션 메뉴 UI
 *
 * @example
 * <MobileMenu closeMenu={함수} />
 *
 * @todo 상세 메뉴 클릭 시 해당 섹션으로 스크롤 이동 기능 추가 예정
 *
 * @author 목소연
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from '@components/menu/mobileMenuStyle';
import icClose from '@assets/common/ic-close-40.svg';
import logo from '@assets/logo/logo-simple.svg';
import icArrow from '@assets/activity/ic-chevron-gray-24.svg';

const MobileMenu = ({ closeMenu }) => {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (menuName) => {
    setOpenAccordion((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <M.BackContainer>
      <M.MenuContainer>
        <M.Close onClick={closeMenu}>
          <img src={icClose} alt="닫기" />
        </M.Close>
        <M.Logo src={logo} alt="메인페이지" onClick={() => navigate('/')} />
        <M.MenuList>
          <M.InnerContainer $isOpenAccordion={openAccordion === 'center'}>
            <M.MenuTitle onClick={() => handleAccordionClick('center')} $isOpenAccordion={openAccordion === 'center'}>
              센터 소개 <M.ArrowIcon src={icArrow} alt="더보기" $isOpenAccordion={openAccordion === 'center'} />
            </M.MenuTitle>
            {openAccordion === 'center' && (
              <M.MenuSubList>
                <M.SubTitle>인사말</M.SubTitle>
                <M.SubTitle>비전/소개</M.SubTitle>
                <M.Content>역할과 전망</M.Content>
                <M.SubTitle>조직도 및 구성원</M.SubTitle>
                <M.Content>조직 체계</M.Content>
                <M.Content>담당자 정보 및 연락처</M.Content>
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
                <M.SubTitle>사업 개요</M.SubTitle>
                <M.Content>센터 설립 목적</M.Content>
                <M.SubTitle>사업 소개</M.SubTitle>
                <M.Content>핵심 연구 분야</M.Content>
                <M.Content>주요 사업</M.Content>
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
                <M.SubTitle>활동 계획</M.SubTitle>
                <M.Content>연도별/분기별 계획표</M.Content>
                <M.Content>주요 일정</M.Content>
                <M.Content>향후 예정 사업 소개</M.Content>
                <M.SubTitle>성과</M.SubTitle>
                <M.Content>완료된 사업 목록</M.Content>
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
                <M.SubTitle>공지사항</M.SubTitle>
                <M.SubTitle>자료실</M.SubTitle>
                <M.SubTitle>센터 소식</M.SubTitle>
              </M.MenuSubList>
            )}
          </M.InnerContainer>
        </M.MenuList>
      </M.MenuContainer>
    </M.BackContainer>
  );
};

export default MobileMenu;
