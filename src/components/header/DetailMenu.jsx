/**
 * DetailMenu 컴포넌트는 Header에서 마우스 호버 시 나타나는 서브 메뉴입니다.
 * 각 메뉴 유형(`center`, `business`, `activity`, `community`)에 따라 다른 하위 항목 리스트를 보여줍니다.
 *
 * @component DetailMenu
 * @param {string} type - 보여줄 상세 메뉴의 유형 ('center' | 'business' | 'activity' | 'community')
 * @example
 * <DetailMenu type="center" />
 *
 * @todo 상세 메뉴 클릭 시 해당 섹션으로 스크롤 이동 기능 추가 예정
 *
 * @author 목소연
 */

import * as D from '@components/header/detailMenuStyle';

const menuItems = {
  center: ['인사말', '비전/소개', '조직도 및 구성원'],
  business: ['사업 개요', '사업 소개'],
  activity: ['활동 계획', '성과'],
  community: ['공지사항', '자료실', '센터 소식', '자주 묻는 질문'],
};

const DetailMenu = ({ type }) => {
  return (
    <D.Container>
      {menuItems[type]?.map((item, idx) => (
        <D.Item key={idx}>{item}</D.Item>
      ))}
    </D.Container>
  );
};

export default DetailMenu;
