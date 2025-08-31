/**
 * CenterCard 컴포넌트는 이미지와 텍스트로 구성된 카드 UI를 렌더링합니다.
 * 주어진 src와 text를 받아 카드 형태로 표시하며, text는 배열일 경우 줄바꿈 기준으로 나눠져 보여집니다.
 *
 * @component CenterCard
 * @param {string} src - 카드에 표시할 이미지 경로
 * @param {string|string[]} text - 문자열 또는 줄바꿈 기준으로 나눠진 문자열 배열
 * @example
 * <CenterCard src="/icons/icon.png" text={["디지털 교육 콘텐츠", "개발 및 실행"]} />
 *
 * @author 노진경
 **/

import * as CC from '@center/components/CenterCardStyle';

const CenterCard = ({ src, text }) => {
  const lines = Array.isArray(text) ? text : [String(text ?? '')];
  return (
    <CC.Card>
      <CC.CardImg src={src} alt="디지털 아이콘" />
      <CC.CardText>
        {lines.map((line, idx) => (
          <span key={idx}>{line}</span>
        ))}
      </CC.CardText>
    </CC.Card>
  );
};

export default CenterCard;
