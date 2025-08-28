import * as I from './InputStyle';

import SearchIcon from '@assets/community/ic-search-40.svg?react';

const Input = ({ value, onChange, onKeyDown, onClick, placeholder }) => {
  return (
    <I.InputDiv>
      <I.Input value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />
      <SearchIcon onClick={onClick} />
    </I.InputDiv>
  );
};

export default Input;
