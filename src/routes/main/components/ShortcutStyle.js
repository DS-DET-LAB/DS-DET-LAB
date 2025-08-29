import styled from 'styled-components';
import palette from '@styles/theme';

export const Container = styled.div`
  width: 90px;
  box-sizing: border-box;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 5px;
  cursor: pointer;
  transition: 300ms ease;

  &:hover {
    background-color: ${palette.hover.back1};
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  transition: 300ms ease;
  color: ${palette.text.body};

  ${Container}:hover & {
    color: ${palette.mainNavy.navy100};
  }
`;

export const ShortcutText = styled.div`
  transition: 300ms ease;
  color: ${palette.text.body};
  /* r14 */
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;

  ${Container}:hover & {
    color: ${palette.mainNavy.navy100};
  }
`;
