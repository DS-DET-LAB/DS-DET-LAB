import styled from 'styled-components';
import palette from '@styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 7px;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  @media (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
  border-radius: 5px;
  background-color: ${palette.text.secondary};
  img {
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    display: block;
    width: 100%;
    height: auto;
  }
  &:hover {
    background-color: ${palette.hover.footer1};
  }
`;

export const Label = styled.span`
  color: ${({ $isOpen }) => ($isOpen ? palette.background.white : palette.background.white80)};
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.5px;
  @media (max-width: 767px) {
    font-size: 16px;
    letter-spacing: -0.4px;
  }
`;

export const Menu = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  background-color: ${palette.text.secondary};
  border-radius: 5px;
  padding: 10px 15px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
`;

export const MenuItem = styled.a`
  display: block;
  width: fit-content;
  cursor: pointer;
  color: ${palette.background.white80};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
  &:hover {
    color: ${palette.background.white};
    font-weight: 600;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
