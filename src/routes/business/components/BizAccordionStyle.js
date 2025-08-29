import styled from 'styled-components';
import palette from '@styles/theme';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 25px 0 70px;
`;

export const Item = styled.div`
  background: ${palette.background.white};
  border-radius: 16px;
  border: 1px solid ${palette.hover.back2};
  box-shadow: ${({ $open }) => ($open ? `0 0 15px 0 ${palette.mainNavy.navy10}` : 'none')};

  &:hover {
    box-shadow: 0 0 15px 0 ${palette.mainNavy.navy10};
  }
`;

export const Header = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px 30px;
  gap: 14px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Num = styled.span`
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${palette.mainNavy.navy30};
  color: ${palette.background.white};
  font-size: 16px;
  font-weight: 400;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${palette.text.primary};
`;

export const Chevron = styled.img`
  margin-left: auto;
`;

export const Body = styled.div`
  padding: 0 30px 24px;
`;

export const Chips = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  column-gap: 20px;
`;

export const Chip = styled.div`
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 17px;
  border: 1px solid ${palette.hover.back2};
  background: ${palette.background.white};
  color: ${palette.text.primary};
  line-height: 1.5;
  font-weight: 400;
  .weak {
    font-size: 16px;
    color: ${palette.text.body};
    font-weight: 100;
  }
`;
