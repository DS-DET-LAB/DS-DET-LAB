/**
 * Footer 내부에서 사용되는 관련 사이트 바로가기 컴포넌트입니다.
 * 버튼 클릭 시 관련된 외부 링크 목록을 토글 방식으로 펼쳐 보여주는 기능을 담당합니다.
 * 가로 너비 767px 분기점으로 반응형이 구현되어 있습니다.
 *
 * @component LinkToggle
 * @example
 * <LinkToggle />
 *
 * @author 목소연
 **/

import { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import * as L from '@components/footer/linkToggleStyle';
import icChevron16 from '@assets/footer/ic-chevron-16.svg';
import icChevron24 from '@assets/footer/ic-chevron-24.svg';

const LinkToggle = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <L.Wrapper>
      <L.Button onClick={handleToggle}>
        <L.Icon $isOpen={isOpen}>
          <img src={isMobile ? icChevron16 : icChevron24} alt="더보기" />
        </L.Icon>
        <L.Label $isOpen={isOpen}>관련 사이트 바로가기</L.Label>
      </L.Button>

      {isOpen && (
        <L.Menu>
          <L.MenuItem href="https://www.duksung.ac.kr" target="_blank" rel="noopener noreferrer">
            덕성여자대학교
          </L.MenuItem>
          <L.MenuItem href="https://dx.kosac.re.kr/dx/main" target="_blank" rel="noopener noreferrer">
            찾아가는 학교 컨설팅
          </L.MenuItem>
          <L.MenuItem href="https://newsac.kosac.re.kr/" target="_blank" rel="noopener noreferrer">
            디지털 새싹
          </L.MenuItem>
        </L.Menu>
      )}
    </L.Wrapper>
  );
};

export default LinkToggle;
