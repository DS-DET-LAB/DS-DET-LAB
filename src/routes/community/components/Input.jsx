/**
 * Input 컴포넌트
 *
 * 커뮤니티 / 공지사항, 자료실에서 사용되는 검색창 컴포넌트입니다.
 *
 * @component
 * @param {string} value - input value 값
 * @param {function} onChange - 입력값 변경 시 호출되는 이벤트 핸들러
 * @param {function} onKeyDown - Enter로 검색 등 키보드 입력 이벤트 핸들러
 * @param {function} onClick - 검색 아이콘 클릭 시 실행될 함수
 * @param {string} placeholder - placeholder 내용
 *
 * @example
 * <Input
 *   value={search}
 *   onChange={(e) => setSearch(e.target.value)}
 *   onKeyDown={handleKeyDown}
 *   onClick={handleSearch}
 *   placeholder="검색어를 입력하세요."
 * />
 *
 * @author 김진효
 */

import * as I from './InputStyle';

import useMediaQuery from '@hooks/useMediaQuery';

import SearchIcon40 from '@assets/community/ic-search-40.svg?react';
import SearchIcon20 from '@assets/community/ic-search-20.svg?react';

const Input = ({ value, onChange, onKeyDown, onClick, placeholder }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <I.InputDiv>
      <I.Input value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />
      {!isMobile && <SearchIcon40 onClick={onClick} />}
      {isMobile && <SearchIcon20 onClick={onClick} />}
    </I.InputDiv>
  );
};

export default Input;
