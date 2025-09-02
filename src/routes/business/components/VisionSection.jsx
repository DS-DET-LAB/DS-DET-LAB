/**
 * VisionSection 컴포넌트는 비전 카드(VisionCard) 목록과 배경 원형 이미지를 함께 렌더링합니다.
 * items 배열을 그리드로 배치하며, 배경 이미지는 절대 배치로 뒤 레이어에 표시됩니다.
 * 태블릿(768–899px)에서는 데스크톱과 동일한 3컬럼 레이아웃을 유지하고,
 * 모바일(≤767px)에서는 1열로 스택되며 배경 원형 이미지는 숨겨집니다.
 *
 * @component VisionSection
 * @param {{ iconSrc: string, title: string, body: string }[]} items - 카드 데이터 배열
 * @example
 * <VisionSection
 *   items=[
 *     { iconSrc: DIcon, title: '디지털 교육 연구 기반 구축', body: '...' },
 *     { iconSrc: RIcon, title: '융합 연구 및 학문 교류 활성화', body: '...' },
 *     { iconSrc: SIcon, title: '학생 연구 참여 및 진로 지원', body: '...' },
 *   ]
 * />
 *
 * @author 노진경
 **/

import VisionCard from '@business/components/VisionCard';
import * as V from '@business/components/VisionSectionStyle';
import circleSvg from '@assets/business/circle.svg';

function VisionSection({ items = [] }) {
  return (
    <V.Section>
      <V.BgImg src={circleSvg} alt="" />
      <V.Grid>
        {items.map((it, i) => (
          <VisionCard key={i} iconSrc={it.iconSrc} title={it.title} body={it.body} />
        ))}
      </V.Grid>
    </V.Section>
  );
}

export default VisionSection;
