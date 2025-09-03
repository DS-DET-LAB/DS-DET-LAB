import useMediaQuery from '@hooks/useMediaQuery';
import * as B from '@main/components/business-card/businessCardStyle';
import Chip from '@main/components/chip/Chip';
import fadeTime from '@main/constants/fadeTime.json';

/**
 * BusinessCard 컴포넌트
 *
 * 메인 페이지에서 사용하는 주요 사업의 카드 형태 컴포넌트입니다.
 * 카테고리(Chip), 제목, 부제목, 설명 내용을 표시합니다.
 * Fade를 통해 스크롤 애니메이션을 보여줍니다.
 *
 * @component
 * @param {string} category - 사업 카테고리 (예: "주요사업")
 * @param {string} title - 사업명 (예: "디지털 새싹")
 * @param {string} subTitle - 부제목 / 간단 설명
 * @param {string} content - 상세 설명
 *
 * @example
 * <BusinessCard
 *   category="주요사업"
 *   title="디지털 새싹"
 *   subTitle="초·중·고 학생 대상 AI·SW 융합 교육 프로그램"
 *   content="디지털 새싹 사업은 초·중·고 학생들을 대상으로 AI와 SW 중심의 실습형 교육을 제공하는 국가 디지털 인재 양성 사업입니다."
 * />
 *
 * @author 김서윤
 */

function BusinessCard({ category, title, subTitle, content }) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 899px)');

  let viewport = 'desktop';
  if (isMobile) viewport = 'mobile';
  else if (isTablet) viewport = 'tablet';

  return (
    <B.Container
      $viewport={viewport}
      direction="up"
      triggerOnce
      duration={fadeTime.duration}
      distance="20px"
      delay={fadeTime.delay}>
      <>
        <B.TopContainer>
          <Chip text={category} />
          <B.Title $viewport={viewport}>{title}</B.Title>
          <B.SubContainer>
            <B.VerticalLine $viewport={viewport} />
            <B.SubTitle $viewport={viewport}>{subTitle}</B.SubTitle>
          </B.SubContainer>
        </B.TopContainer>
        <B.Content $viewport={viewport}>{content}</B.Content>
      </>
    </B.Container>
  );
}

export default BusinessCard;
