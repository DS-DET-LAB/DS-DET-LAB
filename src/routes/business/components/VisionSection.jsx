/**
 * VisionSection 컴포넌트는 비전 카드들과 배경 원형 이미지를 함께 렌더링합니다.
 * items 배열을 받아 그리드로 배치하고, 배경 이미지는 절대 배치로 뒤에 깔립니다.
 *
 * @component VisionSection
 * @param {{ iconSrc: string, title: string, body: string }[]} items - 카드 데이터 배열
 * @example
 * <VisionSection items={[{ iconSrc, title, body }]} />
 *
 * @author 노진경
 **/

import VisionCard from './VisionCard';
import * as V from './VisionSectionStyle';
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
