import styled from 'styled-components';
import palette from '@styles/theme';

export const Wrap = styled.section`
  width: 100%;
  background: #fff;
  border-radius: 16px;
  margin: 0 auto;
`;

export const CalendarArea = styled.div`
  width: clamp(300px, 92vw, 360px);
  margin: 0 auto;
  padding: 0 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 0 12px;
`;

export const MonthTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1f2a37;
`;

export const ArrowButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  color: #4b5563;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    background: #eef2ff;
  }
`;

export const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 6px 8px;
  color: ${palette.text.primary};
  font-size: 18px;
  font-weight: 400;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 0 8px 12px;
`;

export const Empty = styled.div`
  height: 44px;
`;

export const DayCell = styled.button`
  height: 44px;
  border-radius: 10px;
  background: #ffffff;
  position: relative;
  display: grid;
  place-items: center;
  color: ${palette.text.secondary};
  font-weight: 400;
  cursor: pointer;

  .num {
    position: relative;
    z-index: 1;
  }

  &[data-today] {
    outline: 2px solid #eef2ff;
    outline-offset: -2px;
  }
  &[data-selected] {
    background: ${palette.hover.back2};
  }
  &:hover {
    background: ${palette.hover.back2};
  }
`;

export const Dot = styled.span`
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${palette.mainNavy.navy100};
  transform: translateX(-50%);
`;

export const Divider = styled.hr`
  margin: 8px 0 12px;
  border: none;
  border-top: 1px solid #f1f5f9;
`;

export const EmptyList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 8px 8px;
`;

export const EmptyText = styled.div`
  color: ${palette.text.body};
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const DateBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  font-size: 12px;
  line-height: 1;

  .ymd {
    color: ${palette?.text?.primary || '#1f2937'};
    font-weight: 600;
    font-size: 20px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  .weekday {
    color: ${palette?.text?.secondary || '#6b7280'};
    font-weight: 400;
    font-size: 14px;
  }
`;

export const ListContainer = styled.div`
  width: clamp(320px, 92vw, 1040px);
  margin: 16px auto 0;
  padding: 0 8px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 8px 12px;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 16px;
  align-items: center;
  padding: 20px 105px;
  border-radius: 16px;
  border: 1px solid #eef2f7;
  background: #fff;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  @media (min-width: 360px) and (max-width: 767px) {
    padding: 20px;
  }

  .metaRow {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }
  .bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #c7cbe0;
    flex: 0 0 6px;
  }
  .title {
    color: ${palette.text.primary};
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  min-width: 140px;

  @media (max-width: 520px) {
    flex-direction: row;
    align-items: center;
    min-width: 0;
  }

  .date {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
  }
  .date .ymd {
    color: ${palette.text.primary};
    font-size: 20px;
    font-weight: 600;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  .date .weekday {
    color: ${palette.text.secondary};
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Chip = styled.span`
  display: flex;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: #e5e7eb;
  color: ${palette.text.secondary};
  font-weight: 400;
  font-size: 14px;
`;

export const Pager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 0 4px;
`;

export const PagerBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid #e5e7eb;
  background: #f3f4f6;
  color: #111827;
  cursor: pointer;
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;
