import * as I from './InputStyle';

import SearchIcon from '@assets/community/ic-search-40.svg?react';

const Input = ({ value, onChange, onKeyDown, placeholder }) => {
  return (
    <I.InputDiv>
      <I.Input value={value} onChange={onChange} placeholder={placeholder} />
      <SearchIcon onClick={onKeyDown} />
    </I.InputDiv>
  );
};

export default Input;
