/**
 * FutureActivityStyle
 * 향후 예정 사업 소개(FutureActivity)에서 사용하는 styled-components 모음
 *
 * Export 목록
 * - Contianer: 전체 래퍼 (가운데 정렬, 반응형 폭)
 * - Box: 카드 컨테이너 (라운드, 보더, 패딩 반응형)
 * - FelxBox: 상단 연도/헤드라인 수평 정렬(모바일에서만 플렉스)
 * - Year: 연도 텍스트 (보조톤)
 * - HeadLine: 사업명/헤드라인 (주요 톤, 반응형 폰트)
 * - AboutBox: 본문 앞 라인 + 설명 묶음
 * - Line: 본문 앞 세로 라인(높이 반응형)
 * - About: 설명 텍스트 (본문 톤, 반응형 폰트)
 *
 * 접근성/가이드
 * - 텍스트 컨텐츠 중심이라 role 추가 불필요
 * - 컨테이너/박스는 레이아웃만 담당, 색/간격은 theme(palette) 의존
 *
 * 주의
 * - 컴포넌트 이름(Contianer, FelxBox)은 기존 사용처와 일치시키기 위해 그대로 유지합니다.
 */

import React from 'react';
import * as S from '@routes/activity/components/ResultsStyle';

function Results() {
  return (
    <S.Container>
      <S.Box>
        <S.FlexBox>
          <S.Year>2025년</S.Year>
          <S.HeadLine>빅데이터 기반 학습 분석 시스템 구축</S.HeadLine>
        </S.FlexBox>
        <S.AboutBox>
          <S.Line />
          <S.About>
            학습자 데이터 기반 맞춤형 피드백 시스템 <br />
            1차 개발 완료했습니다.
          </S.About>
        </S.AboutBox>
      </S.Box>
    </S.Container>
  );
}

export default Results;
