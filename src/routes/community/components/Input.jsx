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
