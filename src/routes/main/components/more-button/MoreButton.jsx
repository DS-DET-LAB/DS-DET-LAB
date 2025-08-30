import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@hooks/useMediaQuery';
import * as M from '@main/components/more-button/moreButtonStyle';
import IcChevron from '@assets/main/ic-chevron-navy-24.svg';

/**
 * MoreButton 컴포넌트
 *
 * 메인 화면에서 링크를 이동하는 "더보기" 버튼 컴포넌트입니다.
 * 클릭 시 전달받은 `path` 경로로 이동합니다.
 *
 * @component
 * @param {string} text - 버튼 앞에 표시할 텍스트 (예: "공지사항")
 * @param {string} path - 클릭 시 이동할 라우트 경로
 *
 * @example
 * // 사업 더보기 버튼
 * <MoreButton text="사업" path="/business" />
 *
 * @author 김서윤
 */

function MoreButton({ text, path }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 767px)');

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <M.Container isMobile={isMobile} onClick={() => handleNavLinkClick(`${path}`)}>
      <M.Frame>
        <M.Text isMobile={isMobile}>{text} 더보기</M.Text>
        <M.Icon src={IcChevron} alt=">" />
      </M.Frame>
    </M.Container>
  );
}

export default MoreButton;
