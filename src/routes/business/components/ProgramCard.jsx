/**
 * ProgramCard 컴포넌트는 주요 사업을 표시하는 카드 UI입니다.
 * 제목(title), 대상(target), 설명(desc)을 props로 받아 카드 형태로 출력합니다.
 * 카드 내부에는 구분선 아이콘(line.svg)이 자동으로 포함됩니다.
 *
 * @component ProgramCard
 * @param {string} title - 프로그램 이름
 * @param {string} target - 대상
 * @param {string|React.ReactNode} desc - 설명 (문자열 또는 React 노드)
 * @example
 * <ProgramCard
 *   title="2025 디지털 새싹"
 *   target="초·중·고 학생 대상"
 *   desc="AI·SW 융합 교육 프로그램"
 * />
 *
 * @author 노진경
 **/

import * as S from '@business/components/ProgramCardStyle';
import lineIcon from '@assets/center/line.svg';

function ProgramCard({ title, target, desc }) {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>

      <S.Wrapper>
        <S.LineIcon src={lineIcon} alt="선" />
        <S.PWrapper>
          <S.Desc>{target}</S.Desc>
          <S.Desc>{desc}</S.Desc>
        </S.PWrapper>
      </S.Wrapper>
    </S.Card>
  );
}

export default ProgramCard;
