import useMediaQuery from '@hooks/useMediaQuery';
import * as N from '@main/components/notice-card/noticeCardStyle';
import Chip from '@main/components/chip/Chip';
import fadeTime from '@main/constants/fadeTime.json';

/**
 * NoticeCard 컴포넌트
 *
 * 메인 페이지에서 사용하는 공지사항의 카드 형태 컴포넌트입니다.
 * 카테고리(Chip), 제목, 날짜, 설명 내용을 표시합니다.
 * Fade를 통해 스크롤 애니메이션을 보여줍니다.
 *
 * @component
 * @param {string} category - 공지 카테고리 (예: "공지사항")
 * @param {string} title - 공지 제목 (예: "공지사항 제목")
 * @param {string} date - 공지 날짜
 * @param {string} content - 상세 설명
 *
 * @example
 * <NoticeCard
 *   category="공지사항"
 *   title="공지사항 제목"
 *   date="2025.06.10."
 *   content="공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다."
 * />
 *
 * @author 김서윤
 */

function NoticeCard({ category, title, date, content }) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 899px)');

  let viewport = 'desktop';
  if (isMobile) viewport = 'mobile';
  else if (isTablet) viewport = 'tablet';

  return (
    <N.Container
      $viewport={viewport}
      direction="up"
      triggerOnce
      duration={fadeTime.duration}
      distance="20px"
      delay={fadeTime.delay}>
      <N.InsideContainer>
        <N.TopContainer>
          <Chip text={category} />
          <N.Title $viewport={viewport}>{title}</N.Title>
          <N.Date $viewport={viewport}>{date}</N.Date>
        </N.TopContainer>
        <N.Content $viewport={viewport}>{content}</N.Content>
      </N.InsideContainer>
    </N.Container>
  );
}

export default NoticeCard;
