/**
 * VisionCard 컴포넌트는 아이콘, 제목, 설명을 담은 카드 UI입니다.
 * 연구 비전/핵심가치 등의 항목을 반복 렌더링할 때 사용합니다.
 * 아이콘은 시각적 장식 요소로 alt 속성은 비워져 있습니다.
 *
 * @component VisionCard
 * @param {string} iconSrc - 카드 상단 아이콘 경로
 * @param {string} title - 카드 제목
 * @param {string|React.ReactNode} body - 카드 본문 설명 (문자열 또는 React 노드)
 * @example
 * <VisionCard iconSrc={icon} title="디지털 교육 연구 기반 구축" body="설명 텍스트" />
 *
 * @author 노진경
 **/
import * as S from './VisionCardStyle';

function VisionCard({ iconSrc, title, body }) {
  return (
    <S.Card>
      <S.Icon src={iconSrc} alt="" />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardBody>{body}</S.CardBody>
    </S.Card>
  );
}

export default VisionCard;
