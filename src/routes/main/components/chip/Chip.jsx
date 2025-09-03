import useMediaQuery from '@hooks/useMediaQuery';
import * as C from '@main/components/chip/chipStyle';

/**
 * Chip 컴포넌트
 *
 * 텍스트를 담아 보여주는 태그 컴포넌트입니다.
 *
 * @component
 * @param {string} text - Chip 내부에 표시할 텍스트
 *
 * @example
 * // 기본 사용 예시
 * <Chip text="공지사항" />
 *
 * @author 김서윤
 */

function Chip({ text }) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  let viewport = 'desktop';
  if (isMobile) viewport = 'mobile';

  return (
    <C.Container $viewport={viewport}>
      <C.Text $viewport={viewport}>{text}</C.Text>
    </C.Container>
  );
}

export default Chip;
