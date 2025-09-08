/**
 * 사이트 하단에 표시되는 Footer 컴포넌트입니다.
 * 기관 정보, 문의처, 외부 링크(인스타그램/유튜브), 관련 사이트 링크를 포함한 고정 하단 영역을 구성합니다.
 * 가로 너비 767px 분기점으로 반응형이 구현되어 있습니다.
 *
 * @component Footer
 * @example
 * <Footer />
 *
 * @author 목소연
 **/

import useMediaQuery from '@hooks/useMediaQuery';
import * as F from '@components/footer/footerStyle';
import LinkToggle from '@components/footer/LinkToggle';
import logoInsta12 from '@assets/footer/logo-insta-12.svg';
import logoInsta24 from '@assets/footer/logo-insta-24.svg';
import logoYoutube12 from '@assets/footer/logo-youtube-12.svg';
import logoYoutube24 from '@assets/footer/logo-youtube-24.svg';
import departmentInform from '@db/departmentInform.json';
import socialAccount from '@db/socialAccount.json';
import centerTime from '@db/centerTime.json';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <F.FooterContainer>
      <F.FooterInner>
        <F.FooterTitle>덕성여자대학교 디지털교육공학센터</F.FooterTitle>
        <F.FooterSubTitle>
          Duksung Women’s University
          <br />
          Digital Educational Technology Lab
        </F.FooterSubTitle>
      </F.FooterInner>
      <F.FooterBigInner>
        <F.FooterInner>
          <F.FooterTitle>문의</F.FooterTitle>
          <F.InfoText>시간 | 평일 {centerTime.time} (주말 및 공휴일 휴무)</F.InfoText>
        </F.FooterInner>
        {departmentInform.부서.map((dept, idx) => (
          <F.FooterInner key={idx}>
            <F.FooterDetailTitle>{dept.title}</F.FooterDetailTitle>
            <F.InfoText>전화 | {dept.phone}</F.InfoText>
            <F.InfoText>메일 | {dept.email}</F.InfoText>
            <F.InfoText>
              주소 | 덕성여자대학교 {dept.address}, 01369, 서울 도봉구 삼양로144길 33 (쌍문동, 덕성여자대학교)
            </F.InfoText>
          </F.FooterInner>
        ))}
      </F.FooterBigInner>
      <LinkToggle />
      <F.FooterInner>
        <F.Copyright>Copyright © 2025. likelion_ds all rights reserved.</F.Copyright>
        <F.Website>Website by 덕성여대 멋쟁이사자처럼</F.Website>
      </F.FooterInner>
      <F.IconContainer>
        <F.Icon onClick={() => window.open(socialAccount.instagram, '_blank')}>
          <img src={isMobile ? logoInsta12 : logoInsta24} alt="인스타그램" />
          {isMobile && <>Instagram</>}
        </F.Icon>
        <F.Icon onClick={() => window.open(socialAccount.youtube, '_blank')}>
          <img src={isMobile ? logoYoutube12 : logoYoutube24} alt="유튜브" />
          {isMobile && <>Youtube</>}
        </F.Icon>
      </F.IconContainer>
    </F.FooterContainer>
  );
};

export default Footer;
