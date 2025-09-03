import { useRef } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';

import VisionSection from '@business/components/VisionSection';
import BizAccordion from '@business/components/BizAccordion';
import ProgramCard from '@business/components/ProgramCard';

import * as B from '@business/BusinessStyle';
import * as C from '@center/CenterStyle';

import Icon from '@assets/center/triangle.svg';
import DIcon from '@assets/business/ic-edu-72.svg';
import RIcon from '@assets/business/ic-rsch-72.svg';
import SIcon from '@assets/business/ic-stu-72.svg';
import menuIcon from '@assets/center/menuToggle.svg';
import slashIcon from '@assets/center/slash.svg';
import sectionLineIcon from '@assets/center/SectionLine.svg';

function Business() {
  const refs = useRef({ greeting: null, roles: null, org: null, contact: null });
  const setRef = (key) => (el) => {
    refs.current[key] = el;
  };
  const scrollTo = (key) => refs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' });

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
        <C.Sidebar>
          <C.Center>사업 안내</C.Center>
          <C.Float type="button" onClick={() => scrollTo('businessOverview')}>
            사업 개요
          </C.Float>
          <C.Float type="button" onClick={() => scrollTo('roles')}>
            센터 설립 목적
          </C.Float>
          <C.Float type="button" onClick={() => scrollTo('org')}>
            사업 소개
          </C.Float>
          <C.Float type="button" onClick={() => scrollTo('contact')}>
            핵심 연구 분야
          </C.Float>
          <C.Float type="button" onClick={() => scrollTo('businessProjects')}>
            주요 사업
          </C.Float>
        </C.Sidebar>

        <C.SectionWrapper>
          <C.Title ref={setRef('businessOverview')}>사업 개요</C.Title>

          <B.IconWrapper ref={setRef('roles')}>
            <C.TriIcon src={Icon} alt="소제목" />
            <C.SubTitle>센터 설립 목적</C.SubTitle>
          </B.IconWrapper>

          <B.VisionSectionWrapper>
            <VisionSection
              items={[
                {
                  iconSrc: DIcon,
                  title: '디지털 교육 연구 기반 구축',
                  body: '교내에 교양대학(디지털 교육) 관련 학문분야의 교육 공학 연구 거점을 확보하여 외부 학술연구 용역사업 수주의 활성화 및 사업의 안정적 수행을 추구한다.',
                },
                {
                  iconSrc: RIcon,
                  title: '융합 연구 및 학문 교류 활성화',
                  body: '교수 및 강사의 연구역량 강화와 창의적 지식 생산을 통해 학문적 발전 및 타 학문 분야와의 융합 및 교류의 활성화를 추구한다.',
                },
                {
                  iconSrc: SIcon,
                  title: '학생 연구 참여 및 진로 지원',
                  body: '본교 재학생들에게 관련 연구 사업에 참여할 수 있는 기회를 제공함으로써, 졸업 후 관련분야로의 진로 모색에 실질적인 도움을 제공한다.',
                },
              ]}
            />
          </B.VisionSectionWrapper>

          {isMobile && <C.SectionLineIcon src={sectionLineIcon} alt="구분선" />}

          <C.Title ref={setRef('org')}>사업 소개</C.Title>
          <B.IconWrapper ref={setRef('contact')}>
            <C.TriIcon src={Icon} alt="소제목" />
            <C.SubTitle>핵심 연구 분야</C.SubTitle>
          </B.IconWrapper>

          <B.BizWrapper>
            <BizAccordion
              items={[
                {
                  id: 1,
                  title: '디지털 교육 설계 및 실행',
                  chips: [
                    '교사 대상 맞춤형 디지털 교육 콘텐츠 개발 및 실행 연구',
                    '학생 대상 맞춤형 디지털 교육 콘텐츠 개발 및 실행 연구',
                  ],
                },
                {
                  id: 2,
                  title: '디지털 학습 환경 개발',
                  chips: [
                    [
                      { text: '온라인 학습 플랫폼 ', weak: false },
                      { text: 'LMS', weak: true },
                      { text: ' 연구 ', weak: false },
                      { text: 'Moodle, Google Classroom, Blackboard', weak: true },
                    ],
                    [{ text: 'AI 기반 적응형 학습 시스템 개발', weak: false }],
                    [
                      { text: '블렌디드 러닝 ', weak: false },
                      { text: 'Blended Learning', weak: true },
                      { text: ' 및 플립러닝 ', weak: false },
                      { text: 'Flipped Learning', weak: true },
                      { text: ' 모델 연구', weak: false },
                    ],
                  ],
                },
                {
                  id: 3,
                  title: '에듀테크(EdTech) 도구 연구',
                  chips: [
                    [
                      { text: '가상현실 ', weak: false },
                      { text: 'VR', weak: true },
                      { text: ' 및 증강현실 ', weak: false },
                      { text: 'AR', weak: true },
                      { text: '을 활용한 몰입형 학습', weak: false },
                    ],
                    [
                      { text: '게이미피케이션 ', weak: false },
                      { text: 'Gamification', weak: true },
                      { text: ' 을 적용한 학습 설계', weak: false },
                    ],
                    [{ text: 'AI 기반 학습 분석 및 맞춤형 피드백 제공', weak: false }],
                  ],
                },
                {
                  id: 4,
                  title: '학습자 데이터 분석 및 인공지능(AI) 적용',
                  chips: [
                    [
                      { text: '학습 데이터 ', weak: false },
                      { text: 'Big Data', weak: true },
                      { text: ' 를 활용한 성취도 예측 및 맞춤형 학습 경로 설계', weak: false },
                    ],
                    [
                      { text: '자연어 처리 ', weak: false },
                      { text: 'NLP', weak: true },
                      { text: ' 를 이용한 자동 채점 시스템 및 AI 튜터 연구', weak: false },
                    ],
                    [{ text: '감성 분석을 통한 학생의 학습 참여도 및 몰입도 측정', weak: false }],
                  ],
                },
                {
                  id: 5,
                  title: '디지털 평가 및 피드백 시스템 개발',
                  chips: [
                    [
                      { text: '자동 채점 시스템 ', weak: false },
                      { text: 'Auto-Grading', weak: true },
                      { text: ' 및 학습 피드백 알고리즘 연구', weak: false },
                    ],
                    [
                      { text: '포트폴리오 기반 평가 ', weak: false },
                      { text: 'E-portfolio', weak: true },
                      { text: ' 및 수행 평가 시스템 개발', weak: false },
                    ],
                    [{ text: '학습 데이터 기반 실시간 피드백 시스템 설계', weak: false }],
                  ],
                },
                {
                  id: 6,
                  title: '교원·강사 역량 강화 및 지원',
                  chips: [
                    [
                      { text: 'MOOC ', weak: false },
                      { text: '대규모 공개 온라인 강좌', weak: true },
                      { text: ' 및 오픈 러닝 플랫폼 연구', weak: false },
                    ],
                    [{ text: '메타버스 기반 교육 환경 구축 연구', weak: false }],
                    [{ text: '장애인 및 특수교육을 위한 디지털 교육 기술 연구', weak: false }],
                  ],
                },
              ]}
            />
          </B.BizWrapper>
          <B.IconWrapper ref={setRef('businessProjects')}>
            <C.TriIcon src={Icon} alt="소제목" />
            <C.SubTitle>주요 사업</C.SubTitle>
          </B.IconWrapper>

          <B.ProgramCardWrapper>
            <ProgramCard
              title="2025 디지털 새싹"
              target="초·중·고 학생 대상"
              desc="인공지능(AI)·소프트웨어(SW) 융합 교육 프로그램"
            />

            <ProgramCard
              title="2024-2025 찾아가는 학교 컨설팅"
              target="전국 교원 대상"
              desc="디지털 전환 맞춤형 컨설팅 프로그램"
            />
          </B.ProgramCardWrapper>
        </C.SectionWrapper>
      </C.Wrapper>
    </>
  );
}

export default Business;
