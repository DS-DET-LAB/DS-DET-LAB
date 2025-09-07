/**
 * FutureActivity
 * 향후 예정 사업 소개 컴포넌트
 *
 * 내용
 * - 정적 카드 2개(연도/헤드라인/설명)를 표시합니다.
 * - 스타일은 `@routes/activity/components/FutureActivityStyle`에서 관리합니다.
 *
 * Props (향후 확장 아이디어)
 * - items?: Array<{ year: number|string, headline: string, description: React.ReactNode }>
 * - className?: string
 *
 * 접근성
 * - 텍스트 위주의 정보로 별도 role은 필요 없습니다.
 *
 * 사용 예시
 * <FutureActivity />
 */

import React from 'react';
import * as F from '@routes/activity/components/FutureActivityStyle';
function FutureActivity() {
  return (
    <F.Contianer>
      <F.Box>
        <F.FelxBox>
          <F.Year>2026년</F.Year>
          <F.HeadLine>디지털 융합 교육 플랫폼 개발</F.HeadLine>
        </F.FelxBox>
        <F.AboutBox>
          <F.Line />
          <F.About>
            차세대 AI 기반 교육 관리 시스템 개발을 목표로 <br className="line-break" />
            연구 및 기획을 진행할 예정입니다.
          </F.About>
        </F.AboutBox>
      </F.Box>
      <F.Box>
        <F.FelxBox>
          <F.Year>2026년</F.Year>
          <F.HeadLine>지역 연계 교육 확대 사업</F.HeadLine>
        </F.FelxBox>
        <F.AboutBox>
          <F.Line />
          <F.About>
            지역 초·중·고 대상 디지털 교육 지원 사업을 통해 <br className="line-break" />
            실질적인 교육 기회를 확대하고자 합니다.
          </F.About>
        </F.AboutBox>
      </F.Box>
    </F.Contianer>
  );
}
export default FutureActivity;
