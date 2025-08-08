/**
 * 뷰포트의 크기나 조건에 따라 미디어 쿼리 결과를 반환하는 커스텀 훅입니다.
 * 반응형 조건에 따라 다른 UI를 렌더링하거나 로직을 분기할 때 사용할 수 있습니다.
 * 
 * @function useMediaQuery
 * @param {string} query - CSS 미디어 쿼리 문자열 (예: '(max-width: 360px)')
 * @returns {boolean} 주어진 미디어 쿼리에 현재 뷰포트가 부합하면 true, 그렇지 않으면 false
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 360px)');
 * 
 * return (
 *   <div>
 *     {isMobile ? '모바일 화면입니다.' : '데스크탑 화면입니다.'}
 *   </div>
 * );
 *
 * @author 목소연
 */

import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const getMatches = (query) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
