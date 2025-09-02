import styled from 'styled-components';
import palette from '@styles/theme';

export const List = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;

  margin: 25px 0 70px;

  width: 90%;

  @media (min-width: 768px) and (max-width: 899px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    margin: 0 0 70px;
    width: 100%;
  }
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
  min-width: 0;

  & > span:nth-of-type(2) {
    text-align: left;
  }
`;

export const Num = styled.span`
  flex: 0 0 24px;
  min-width: 24px;
  min-height: 24px;
  width: 24px;
  height: 24px;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  background: ${palette.mainNavy.navy30};
  color: ${palette.background.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
`;

export const Title = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${palette.text.primary};
  line-height: 1.35;

  @media (min-width: 768px) and (max-width: 899px) {
    font-size: 16px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Chevron = styled.img`
  margin-left: auto;
  flex-shrink: 0;
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

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    column-gap: 0;
    grid-auto-flow: unset;
    grid-auto-columns: unset;
    border-top: 1px solid ${palette.hover.back2};
    padding-top: 15px;
  }
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

  @media (min-width: 768px) and (max-width: 899px) {
    font-size: 14px;

    .weak {
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    border: none;
    background: transparent;
    padding: 0 0 0 28px;
    border-radius: 0;
    font-size: 14px;

    line-height: 1.6;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 0.15em;
      font-size: 14px;
      line-height: 1;
      color: ${palette.text.primary};
    }

    .weak {
      font-size: 14px;
    }
  }
`;
