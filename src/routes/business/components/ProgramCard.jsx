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
 *   content="디지털 새싹 사업은 초·중·고 학생들을 대상으로 AI와 소프트웨어 중심의 실습형 교육을 제공하는 국가 디지털 인재 양성 사업입니다. 덕성여자대학교 디지털 교육공학 센터는 해당 사업의 운영기관으로서, 다양한 학교 및 지역아동센터에 직접 찾아가 학생들에게 디지털 체험 중심의 교육을 제공합니다."
 * />
 *
 * @author 노진경
 **/

import * as S from '@business/components/ProgramCardStyle';
import lineIcon from '@assets/center/line.svg';
import React, { useState, useCallback } from 'react';
import DownToggle from '@assets/business/downToggle.svg';

function ProgramCard({ title, target, desc, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  }, []);

  return (
    <S.Card
      role="button"
      tabIndex={0}
      $isOpen={isOpen}
      aria-expanded={isOpen}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}>
      <S.DivWrapper>
        <S.Title>{title}</S.Title>
        <S.Chevron $isOpen={isOpen} src={DownToggle} alt="" />
      </S.DivWrapper>

      <S.Wrapper>
        <S.PWrapper>
          <S.LineIcon src={lineIcon} alt="선" />
          <S.TitleWrapper>
            <S.Desc>{target}</S.Desc>
            <S.Desc>{desc}</S.Desc>
          </S.TitleWrapper>
        </S.PWrapper>

        {isOpen && <S.Content>{content}</S.Content>}
      </S.Wrapper>
    </S.Card>
  );
}

export default ProgramCard;
