import styled from 'styled-components';
import palette from '@styles/theme';

export const Container = styled.div`
  position: absolute;
  top: 130%;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 7px 5px;
  z-index: 10;
  border-radius: 11px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
`;

export const Item = styled.div`
  cursor: pointer;
  transition: 300ms ease;
  padding: 10px 18px;
  white-space: nowrap;
  border-radius: 10px;
  &:hover {
    background-color: ${palette.hover.back1};
  }
  color: ${palette.text.secondary};
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;
`;
