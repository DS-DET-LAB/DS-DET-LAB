import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px 112px;
`;

export const BgImg = styled.img`
  position: absolute;
  inset: 14% auto auto 50%;
  transform: translateX(-50%);
  width: 474px;
  height: auto;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 767px) and (min-width: 360px) {
    display: none;
  }
`;

export const Grid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 90px max-content 90px;
  grid-auto-rows: auto;
  row-gap: 28px;
  column-gap: 12px;
  justify-items: center;
  align-items: start;

  & > *:nth-child(1) {
    grid-column: 2;
    grid-row: 1;
  }
  & > *:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }
  & > *:nth-child(3) {
    grid-column: 3;
    grid-row: 2;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: stretch;

    & > *:nth-child(1),
    & > *:nth-child(2),
    & > *:nth-child(3) {
      grid-column: 1;
      grid-row: auto;
    }
  }
`;
