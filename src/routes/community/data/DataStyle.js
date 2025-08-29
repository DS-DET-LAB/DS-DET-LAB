import styled from 'styled-components';
import palette from '@styles/theme';

export const BusinessWrapper = styled.div`
  display: flex;
  gap: 12px;

  margin: -5px 0 -5px 20px;
`;

export const Business = styled.div`
  border-radius: 30px;
  background-color: ${({ $isActive }) => ($isActive ? palette.mainNavy.navy100 : palette.hover.back2)};
  padding: 8px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ $isActive }) => ($isActive ? palette.background.white : palette.text.primary)};
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.5px;

  cursor: pointer;
`;
