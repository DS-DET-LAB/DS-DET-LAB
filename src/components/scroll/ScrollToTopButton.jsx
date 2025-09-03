/**
 * 페이지 상단 이동 버튼 컴포넌트입니다.
 * 사용자가 페이지를 특정 스크롤(400px) 이상 내렸을 때만 나타나며, 클릭 시 페이지 최상단으로 부드럽게 스크롤됩니다.
 * 반응형 디자인이 적용되어 모바일(767px 이하) 환경에서는 버튼의 위치와 크기가 조정됩니다.
 *
 * @component ScrollToTop
 * @returns {JSX.Element} 페이지 상단 이동 버튼의 JSX 요소
 *
 * @example
 * // 레이아웃 컴포넌트 내에서 사용합니다.
 * <ScrollToTopButton />
 *
 * @author 목소연
 **/

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '@styles/theme';
import icArrowUp from '@assets/common/ic-arrow-up-40.svg';

const Btn = styled.div`
  cursor: pointer;
  position: fixed;
  right: 60px;
  bottom: 40px;
  z-index: 900;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 58px;
  border: 1px solid ${palette.background.white30};
  background: ${palette.background.white30};
  box-shadow: 0 0 10px 0 rgba(18, 32, 102, 0.25);
  backdrop-filter: blur(10px);

  @media (max-width: 767px) {
    right: 30px;
    bottom: 30px;
  }

  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.$isVisible ? 'auto' : 'none')};
`;

const Icon = styled.img`
  width: 30px;
  height: auto;

  @media (max-width: 767px) {
    width: 20px;
  }
`;

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Btn $isVisible={showButton} onClick={scrollToTopHandler}>
      <Icon src={icArrowUp} alt="상단스크롤" />
    </Btn>
  );
}

export default ScrollToTop;
