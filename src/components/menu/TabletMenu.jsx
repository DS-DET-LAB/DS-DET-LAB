/**
 * TabletMenu 컴포넌트는 태블릿 해상도에서 보여지는 사이드 메뉴입니다.
 *
 * @param {function} closeMenu - 메뉴를 닫는 함수 (상위 Header에서 전달됨)
 * @returns {JSX.Element} 태블릿 네비게이션 메뉴 UI
 *
 * @example
 * <TabletMenu closeMenu={함수} />
 *
 * @todo 상세 메뉴 클릭 시 해당 섹션으로 스크롤 이동 기능 추가 예정
 *
 * @author 목소연
 */

import { useNavigate } from 'react-router-dom';
import * as T from '@components/menu/tabletMenuStyle';
import icClose from '@assets/common/ic-close-40.svg';
import logo from '@assets/logo/logo-simple.svg';

const TabletMenu = ({ closeMenu }) => {
  const navigate = useNavigate();

  return (
    <T.MenuContainer>
      <T.Close onClick={closeMenu}>
        <img src={icClose} alt="닫기" />
      </T.Close>
      <T.Logo src={logo} alt="메인페이지" onClick={() => navigate('/')} />
      <T.MenuList>
        <T.MenuTitle>센터 소개</T.MenuTitle>
        <T.MenuSubList>
          <T.SubTitle>인사말</T.SubTitle>
          <T.SubTitle>비전/소개</T.SubTitle>
          <T.Content>역할과 전망</T.Content>
          <T.SubTitle>조직도 및 구성원</T.SubTitle>
          <T.Content>조직 체계</T.Content>
          <T.Content>담당자 정보 및 연락처</T.Content>
        </T.MenuSubList>

        <T.MenuTitle>사업 안내</T.MenuTitle>
        <T.MenuSubList>
          <T.SubTitle>사업 개요</T.SubTitle>
          <T.Content>센터 설립 목적</T.Content>
          <T.SubTitle>사업 소개</T.SubTitle>
          <T.Content>핵심 연구 분야</T.Content>
          <T.Content>주요 사업</T.Content>
        </T.MenuSubList>

        <T.MenuTitle>사업 활동</T.MenuTitle>
        <T.MenuSubList>
          <T.SubTitle>활동 계획</T.SubTitle>
          <T.Content>연도별/분기별 계획표</T.Content>
          <T.Content>주요 일정</T.Content>
          <T.Content>향후 예정 사업 소개</T.Content>
          <T.SubTitle>성과</T.SubTitle>
          <T.Content>완료된 사업 목록</T.Content>
        </T.MenuSubList>

        <T.MenuTitle>커뮤니티</T.MenuTitle>
        <T.MenuSubList>
          <T.SubTitle>공지사항</T.SubTitle>
          <T.SubTitle>자료실</T.SubTitle>
          <T.SubTitle>센터 소식</T.SubTitle>
        </T.MenuSubList>
      </T.MenuList>
    </T.MenuContainer>
  );
};

export default TabletMenu;
