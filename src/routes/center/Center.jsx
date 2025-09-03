import { useRef } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import centerTime from '@db/centerTime.json';
import departmentMail from '@db/departmentMail.json';

import CenterCard from '@center/components/CenterCard';
import PersonalCard from '@center/components/PersonalCard';

import * as C from '@center/CenterStyle';
import Icon from '@assets/center/triangle.svg';
import DIcon from '@assets/center/ic-content_dev-64.svg';
import DIcon2 from '@assets/center/ic-future_edu-64.svg';
import DIcon3 from '@assets/center/ic-learn_env-64.svg';
import DIcon4 from '@assets/center/ic-ai_edutech-64.svg';
import DIcon5 from '@assets/center/ic-edutech_tool-64.svg';
import PIcon from '@assets/center/Vector.svg';
import PIcon2 from '@assets/center/atom.svg';
import PIcon3 from '@assets/center/sliders-horizontal.svg';
import PIcon4 from '@assets/center/brain-circuit.svg';
import PIcon5 from '@assets/center/wrench.svg';
import OrganizationIcon from '@assets/center/org_chart-450w.png';
import PhoneOrganizationIcon from '@assets/center/org_chart-268w.png';
import LineIcon from '@assets/center/line.svg';
import MailIcon from '@assets/center/ic-mail-filled-24.svg';
import menuIcon from '@assets/center/menuToggle.svg';
import slashIcon from '@assets/center/slash.svg';
import sectionLineIcon from '@assets/center/SectionLine.svg';

import ParkImg from '@assets/center/Park.png';
import KimImg from '@assets/center/Kim.png';
import BaeImg from '@assets/center/Bae.png';
import LeeImg from '@assets/center/Lee.png';
import NamImg from '@assets/center/Nam.png';
import SonImg from '@assets/center/Son.png';
import ChoiImg from '@assets/center/Choi.png';
import HwangImg from '@assets/center/Hwang.png';
import LimImg from '@assets/center/Lim.png';

function Center() {
  const refs = useRef({ greeting: null, roles: null, org: null, contact: null });
  const setRef = (key) => (el) => {
    refs.current[key] = el;
  };
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 899px)');

  return (
    <>
      {(isMobile || isTablet) && (
        <C.BreadcrumbBar aria-label="breadcrumb">
          <C.Crumbs>
            <li>
              <p>홈</p>
            </li>
            <C.Sep src={slashIcon} />
            <li>
              <p>센터 소개</p>
              <C.Sep src={menuIcon} alt="메뉴 아이콘" />
            </li>
            <C.Sep src={slashIcon} />
            <li>
              <p>인사말</p>
              <C.Sep src={menuIcon} alt="메뉴 아이콘" />
            </li>
          </C.Crumbs>
        </C.BreadcrumbBar>
      )}
      <C.Wrapper>
        <C.SectionWrapper>
          <C.Title less-margin="true" id="greeting" ref={setRef('greeting')}>
            인사말
          </C.Title>
          <C.Body>
            <C.TextBody>
              디지털 교육공학센터<C.EngSpan>(Digital Educational Technology Lab, EdTech Lab)</C.EngSpan>는 디지털 기술을
              활용한 교육 방법, 학습 도구, 그리고 교육 혁신에 대한 연구를 수행하는 기관입니다. 디지털 교육공학센터는
              교육 공학을 중심으로 교육과 기술의 융합을 통한 실질적인 교육 개선을 목표로 합니다.
            </C.TextBody>
          </C.Body>

          {isMobile && <C.SectionLineIcon src={sectionLineIcon} alt="구분선" />}
          <C.Title id="vision">비전/소개</C.Title>
          <C.IconWrapper less-margin="true">
            <C.TriIcon src={Icon} alt="소제목" />
            <C.SubTitle>비전과 소개</C.SubTitle>
          </C.IconWrapper>

          <C.Body>
            <C.TextBody>
              디지털 전환 시대를 맞아, 덕성여자대학교는 교양대학을 중심으로 디지털 교육 분야의 학제간 융합 연구를
              선도하고자 디지털 교육공학센터를 설립하였습니다. 본 센터는 지식정보사회에서 요구되는 창의적 지식 생산과
              정보 활용 능력을 제고하고, 교육 혁신과 학문적 발전을 위한 융합연구 거점으로 기능합니다.
            </C.TextBody>
            <C.TextBody>
              2024년에는 교육부와 한국과학창의재단의 『찾아가는 학교 컨설팅』 사업의 운영기관으로 선정되었으며, 이
              사업은 2025년, 2026년까지 최대 3년간 계속 사업으로 운영될 예정입니다. 2025년에는 교육부와
              한국과학창의재단의 『디지털 새싹』 사업도 함께 진행하고 있습니다.
            </C.TextBody>
            <C.TextBody>
              본 센터는 디지털 교육 분야 교수 및 강사의 연구역량 강화와 학제간 융합연구 활성화를 목표로 하며, 외부 학술
              연구용역 사업의 수주를 통한 실질적인 연구성과 창출을 지향합니다. 더불어, 본교 재학생들에게는 연구 참여
              기회를 제공함으로써 실무 역량을 키우고 졸업 후 관련 분야 진출을 위한 진로 모색의 장으로 기능하고자 합니다.
            </C.TextBody>
          </C.Body>

          <C.IconWrapper ref={setRef('roles')}>
            <C.TriIcon src={Icon} alt="소제목" />
            <C.SubTitle id="vision-overview">역할과 전망</C.SubTitle>
          </C.IconWrapper>

          <C.WrapWrapper>
            <C.CardWrapper>
              <CenterCard src={isMobile ? PIcon : DIcon} text={'디지털 교육 콘텐츠 개발 및 실행'} />

              <CenterCard src={isMobile ? PIcon2 : DIcon2} text={'디지털 융합 기반 미래 교육 연구 및 개발'} />

              <CenterCard src={isMobile ? PIcon3 : DIcon3} text={'디지털 학습 환경 최적화 및 맞춤형 교육 지원'} />
            </C.CardWrapper>
            <C.CardWrapper>
              <CenterCard
                src={isMobile ? PIcon4 : DIcon4}
                text={'빅데이터, AI, VR/AR을 활용한 혁신적인 교육 방법 연구'}
              />

              <CenterCard src={isMobile ? PIcon5 : DIcon5} text={'에듀테크 기업과 협업하여 실용적인 학습 도구 개발'} />
            </C.CardWrapper>
          </C.WrapWrapper>

          {isMobile && <C.SectionLineIcon src={sectionLineIcon} alt="구분선" />}

          <C.Title id="organization" ref={setRef('org')}>
            조직도 및 구성원
          </C.Title>
          <C.IconWrapper>
            <C.TriIcon src={Icon} alt="소제목" />
            <C.SubTitle id="organization-structure">조직 체계</C.SubTitle>
          </C.IconWrapper>

          <C.OrganiCardWrapper>
            <C.Card>
              <C.OrganizationImg src={isMobile ? PhoneOrganizationIcon : OrganizationIcon} alt="디지털 아이콘" />
            </C.Card>
          </C.OrganiCardWrapper>

          <C.IconWrapper no-margin="true" ref={setRef('contact')}>
            <C.TriIcon src={Icon} alt="소제목" />
            <C.SubTitle id="contact">담당자 정보 및 연락처</C.SubTitle>
          </C.IconWrapper>

          <C.SubWrapper>
            <C.LineIcon src={LineIcon} alt="줄" />
            <C.PWrapper>
              <C.PSbub>{centerTime.title}</C.PSbub>
              <C.PSbub>
                평일 <C.SpanExtraSub>{centerTime.time}</C.SpanExtraSub> (주말 및 공휴일 휴무)
              </C.PSbub>
            </C.PWrapper>
          </C.SubWrapper>

          <C.LabelDiv more-margin="true">
            <C.LabelP>센터장</C.LabelP>
          </C.LabelDiv>

          <C.PersonalCardWrapper>
            <PersonalCard photoSrc={ParkImg} name={'박주연'} role={'교수님'} phone={'02-901-8785'} />
          </C.PersonalCardWrapper>

          <C.LabelDiv>
            <C.LabelP>{departmentMail.부서[1].title}</C.LabelP>
          </C.LabelDiv>

          <C.IconWrapper data-tail="true">
            <C.MailImg src={MailIcon} alt="메일 아이콘" />
            <C.LabelP>{departmentMail.부서[1].text}</C.LabelP>
          </C.IconWrapper>

          <C.PersonalCardWrapper>
            <PersonalCard photoSrc={KimImg} name={'김세진'} role={'팀장'} phone={'02-901-8810'} />
            <PersonalCard photoSrc={BaeImg} name={'배초롱'} role={'책임연구원'} phone={'02-901-8853'} />
            <PersonalCard photoSrc={LeeImg} name={'이 정'} role={'연구원'} phone={'02-901-8635'} />

            <PersonalCard photoSrc={NamImg} name={'남정연'} role={'연구원'} phone={'02-901-8494'} />
            <PersonalCard photoSrc={SonImg} name={'손승우'} role={'연구원'} phone={'02-901-8495'} />
          </C.PersonalCardWrapper>

          <C.LabelDiv>
            <C.LabelP>{departmentMail.부서[0].title}</C.LabelP>
          </C.LabelDiv>

          <C.IconWrapper data-tail="true">
            <C.MailImg src={MailIcon} alt="메일 아이콘" />
            <C.LabelP>{departmentMail.부서[0].text}</C.LabelP>
          </C.IconWrapper>

          <C.PersonalCardWrapper>
            <PersonalCard photoSrc={ChoiImg} name={'최예영'} role={'연구원'} phone={'02-901-8224'} />
            <PersonalCard photoSrc={HwangImg} name={'황고운'} role={'연구원'} phone={''} />
            <PersonalCard photoSrc={LimImg} name={'임해랑'} role={'연구원'} phone={''} />
          </C.PersonalCardWrapper>
        </C.SectionWrapper>
      </C.Wrapper>
    </>
  );
}

export default Center;
