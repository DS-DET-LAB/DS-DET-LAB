/**
 * Bungi
 * 분기별(Quarter) 계획 카드 컴포넌트
 *
 * 기능
 * - props(quarter, months, items)가 전달되면 그것을 우선 렌더링
 * - props가 없으면 idx(0~3)를 기준으로 내부 정적 QUARTERS 데이터에서 선택
 * - 잘못된 idx이거나 데이터가 없으면 null 반환하여 안전하게 스킵
 *
 * Props
 * - idx?: number                // 0:1분기, 1:2분기, 2:3분기, 3:4분기 (옵션)
 * - quarter?: string            // 예: "1분기" (옵션)
 * - months?: string             // 예: "1월 ~ 3월" (옵션)
 * - items?: string[]            // 항목 배열 (옵션)
 *
 * 스타일
 * - 레이아웃/타이포 등은 @activity/ActivityStyle 에 정의된 styled-components 사용
 *
 * 사용 예시
 * <Bungi idx={0} />
 * <Bungi quarter="2분기" months="4월 ~ 6월" items={['항목1','항목2']} />
 *
 * 보조 컴포넌트
 * - <BungiList />: QUARTERS 전부(총 4개)를 한 번에 렌더링
 */

import * as A from '@activity/ActivityStyle';

// 정적 데이터
const QUARTERS = [
  {
    quarter: '1분기',
    months: '1월 ~ 3월',
    items: ["'덕성여대 디지털 교육공학센터' 설립", '디지털 교육 연구 기반 구축', '학습 피드백 알고리즘 개발 착수'],
  },
  {
    quarter: '2분기',
    months: '4월 ~ 6월',
    items: [
      "'덕성여대 디지털 교육공학센터' 공식 홈페이지 개설",
      '맞춤형 디지털 학습 환경 설계',
      '빅데이터 기반 교육 분석 체계 개발',
    ],
  },
  {
    quarter: '3분기',
    months: '7월 ~ 9월',
    items: ['에듀테크 기업 협업 프로그램 운영', '디지털 콘텐츠 제작 지원 사업 추진'],
  },
  {
    quarter: '4분기',
    months: '10월 ~ 12월',
    items: ['연간 성과 분석 및 차년도 계획 수립', '외부 연계 사업 확대를 위한 네트워킹 진행'],
  },
];

export default function Bungi({ idx, quarter, months, items }) {
  // props가 있으면 우선 사용, 없으면 idx로 내부 데이터 선택
  const fallback = typeof idx === 'number' ? QUARTERS[idx] : null;
  const q = quarter ?? fallback?.quarter;
  const m = months ?? fallback?.months;
  const list = items ?? fallback?.items ?? [];

  if (!q) return null; // idx 범위 밖 방지

  return (
    <A.BContainer>
      <A.BHeaderBox>
        <A.BHeader>{q}</A.BHeader>
        <A.BMonth>{m}</A.BMonth>
      </A.BHeaderBox>

      <A.ListContainer>
        {list.map((text, i) => (
          <A.ListBox key={i}>
            <A.Circle />
            <A.List>{text}</A.List>
          </A.ListBox>
        ))}
      </A.ListContainer>
    </A.BContainer>
  );
}

// 전체 4개를 한 번에 렌더 헬퍼
export function BungiList() {
  return (
    <>
      {QUARTERS.map((data, i) => (
        <Bungi key={i} {...data} />
      ))}
    </>
  );
}
