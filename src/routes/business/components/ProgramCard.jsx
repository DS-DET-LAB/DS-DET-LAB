/**
 * ProgramCard 컴포넌트는 주요 사업 카드 UI입니다.
 * 제목, 대상, 설명을 props 로 받아 출력합니다.
 *
 * @component ProgramCard
 * @param {string} title - 프로그램 이름
 * @param {string} target - 대상
 * @param {string} desc - 설명
 * @example
 * <ProgramCard title="2025 디지털 새싹" target="초·중·고 학생 대상" desc="AI·SW 융합 교육 프로그램" />
 *
 * @author 노진경
 **/
import * as S from './ProgramCardStyle';
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
