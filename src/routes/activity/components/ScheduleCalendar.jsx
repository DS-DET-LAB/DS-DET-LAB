import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/theme';

/**
 * 일정(스케줄) 캘린더 컴포넌트 (JavaScript/JSX)
 *
 * 요구사항
 * 1) 일정이 없는 날짜 클릭 → 해당 날짜 강조 + 아래에 "일정이 없습니다." 출력
 * 2) 일정이 있는 날짜 클릭 → 해당 날짜의 일정 리스트 출력
 * 3) 아무것도 클릭 안 함 → 지금 시각 기준 '최신순(다가오는 일정부터)'으로 주요 일정 리스트 출력
 *
 * 사용 예시
 * <MajorScheduleCalendar
 *   schedules={[
 *     { id: 1, title: "디지털 새싹 프로그램 1차", startsAt: "2025-06-19T10:00:00+09:00" },
 *     { id: 2, title: "디지털 새싹 프로그램 2차", startsAt: "2025-07-03T10:00:00+09:00" },
 *   ]}
 * />
 */

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function toDate(d) {
  return d instanceof Date ? d : new Date(d);
}

function startOfDayLocal(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function dateKey(d) {
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${day}`; // YYYY-MM-DD
}

function formatYYMMDD(d) {
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yy}.${mm}.${dd}`;
}

function ddayLabel(eventDate, today = new Date()) {
  const t0 = startOfDayLocal(today).getTime();
  const e0 = startOfDayLocal(eventDate).getTime();
  const diffDays = Math.round((e0 - t0) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'D-Day';
  if (diffDays > 0) return `D-${diffDays}`;
  return `D+${Math.abs(diffDays)}`;
}

export default function MajorScheduleCalendar({
  schedules = [],
  initialMonth,
  onDateSelect,
  onScheduleClick,
  pageSize = 5,
}) {
  const init = initialMonth ? toDate(initialMonth) : new Date();
  const [viewYear, setViewYear] = useState(init.getFullYear());
  const [viewMonth, setViewMonth] = useState(init.getMonth()); // 0~11
  const [selectedDate, setSelectedDate] = useState(null);
  const [page, setPage] = useState(0);

  const monthStart = new Date(viewYear, viewMonth, 1);
  const monthEnd = new Date(viewYear, viewMonth + 1, 0);
  const firstWeekday = monthStart.getDay(); // 0:일 ~ 6:토
  const lastDateNum = monthEnd.getDate();

  // 현재 월에 속한 일정만 맵핑 (YYYY-MM-DD → 일정 배열)
  const byDateMap = useMemo(() => {
    const map = new Map();
    schedules.forEach((s) => {
      const dt = toDate(s.startsAt);
      if (dt.getFullYear() === viewYear && dt.getMonth() === viewMonth) {
        const k = dateKey(dt);
        const arr = map.get(k) || [];
        arr.push(s);
        map.set(k, arr);
      }
    });
    return map;
  }, [schedules, viewYear, viewMonth]);

  // 선택된 날짜의 일정
  const selectedDateItems = useMemo(() => {
    if (!selectedDate) return [];
    const k = dateKey(selectedDate);
    return byDateMap.get(k) || [];
  }, [selectedDate, byDateMap]);

  // 아무것도 선택 안 했을 때: 최신순(다가오는 일정 먼저)
  const upcomingSorted = useMemo(() => {
    const now = new Date();
    const sorted = schedules.slice().sort((a, b) => toDate(a.startsAt) - toDate(b.startsAt));
    const future = sorted.filter((s) => toDate(s.startsAt) >= startOfDayLocal(now));
    const past = sorted.filter((s) => toDate(s.startsAt) < startOfDayLocal(now));
    return [...future, ...past];
  }, [schedules]);

  // 페이지 리셋
  React.useEffect(() => {
    setPage(0);
  }, [viewMonth, viewYear, selectedDate, schedules]);

  const listSource = selectedDate ? selectedDateItems : upcomingSorted;
  const totalPages = Math.max(1, Math.ceil(listSource.length / pageSize));
  const pagedList = selectedDate ? listSource : listSource.slice(page * pageSize, page * pageSize + pageSize);

  const goPrevMonth = () => {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
    setSelectedDate(null);
    onDateSelect && onDateSelect(null);
  };

  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
    setSelectedDate(null);
    onDateSelect && onDateSelect(null);
  };

  const handleSelect = (d) => {
    setSelectedDate(d);
    onDateSelect && onDateSelect(d);
  };

  // 캘린더 셀 생성 (이달 날짜만 표시, 앞쪽은 빈칸)
  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let day = 1; day <= lastDateNum; day++) {
    cells.push(new Date(viewYear, viewMonth, day));
  }

  return (
    <Wrap>
      <CalendarArea>
        <Header>
          <ArrowButton onClick={goPrevMonth} aria-label="이전 달">
            ‹
          </ArrowButton>
          <MonthTitle>
            {viewYear}.{`${viewMonth + 1}`.padStart(2, '0')}
          </MonthTitle>
          <ArrowButton onClick={goNextMonth} aria-label="다음 달">
            ›
          </ArrowButton>
        </Header>

        <WeekHeader>
          {WEEKDAYS.map((w) => (
            <div key={w}>{w}</div>
          ))}
        </WeekHeader>

        <Grid role="grid" aria-label="월간 캘린더">
          {cells.map((d, i) => {
            if (!d) return <Empty key={`e-${i}`} />;
            const key = dateKey(d);
            const isSelected = !!selectedDate && dateKey(selectedDate) === key;
            const hasItems = byDateMap.has(key);
            const isToday = dateKey(d) === dateKey(new Date());
            return (
              <DayCell
                key={key}
                onClick={() => handleSelect(d)}
                aria-pressed={isSelected}
                data-selected={isSelected || undefined}
                data-today={isToday || undefined}>
                <span className="num">{d.getDate()}</span>
                {hasItems && <Dot aria-hidden />}
              </DayCell>
            );
          })}
        </Grid>

        <Divider />
      </CalendarArea>

      {/* 리스트 영역 */}
      {selectedDate ? (
        pagedList.length === 0 ? (
          <ListContainer>
            <EmptyList>
              <DateBadge>
                <span className="ymd">{formatYYMMDD(selectedDate)}</span>
                <span className="weekday">{WEEKDAYS[selectedDate.getDay()]}요일</span>
              </DateBadge>
              <EmptyText>일정이 없습니다.</EmptyText>
            </EmptyList>
          </ListContainer>
        ) : (
          <>
            <ListContainer>
              <List>
                {pagedList.map((it) => {
                  const d = toDate(it.startsAt);
                  return (
                    <ListItem key={it.id} onClick={() => onScheduleClick && onScheduleClick(it)}>
                      <DateBlock>
                        <Chip>{ddayLabel(d)}</Chip>

                        {/* 날짜(YY.MM.DD) + 요일 분리 */}
                        <div className="date">
                          <span className="ymd">{formatYYMMDD(d)}</span>
                          <span className="weekday">{WEEKDAYS[d.getDay()]}요일</span>
                        </div>
                      </DateBlock>

                      <div className="metaRow">
                        <span className="bullet" />
                        <div className="title">{it.title}</div>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
            </ListContainer>
          </>
        )
      ) : (
        <>
          <ListContainer>
            <List>
              {pagedList.map((it) => {
                const d = toDate(it.startsAt);
                return (
                  <ListItem key={it.id} onClick={() => onScheduleClick && onScheduleClick(it)}>
                    <DateBlock>
                      <Chip>{ddayLabel(d)}</Chip>

                      {/* 날짜(YY.MM.DD) + 요일 분리 */}
                      <div className="date">
                        <span className="ymd">{formatYYMMDD(d)}</span>
                        <span className="weekday">{WEEKDAYS[d.getDay()]}요일</span>
                      </div>
                    </DateBlock>

                    <div className="metaRow">
                      <span className="bullet" />
                      <div className="title">{it.title}</div>
                    </div>
                  </ListItem>
                );
              })}
            </List>
            {totalPages > 1 && (
              <Pager>
                <PagerBtn disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
                  ‹
                </PagerBtn>
                <PagerBtn
                  disabled={page >= totalPages - 1}
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}>
                  ›
                </PagerBtn>
              </Pager>
            )}
          </ListContainer>
        </>
      )}
    </Wrap>
  );
}

/* ---------- styled ---------- */
const Wrap = styled.section`
  width: 100%;
  background: #fff;
  border-radius: 16px;
  margin: 0 auto;
`;

const CalendarArea = styled.div`
  /* 300px ~ 560px 사이에서 뷰포트에 맞춰 유연하게 */
  width: clamp(300px, 92vw, 360px);
  margin: 0 auto;
  padding: 0 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 0 12px;
`;

const MonthTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1f2a37;
`;

const ArrowButton = styled.button`
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

const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 6px 8px;
  color: ${palette.text.primary};
  font-size: 18px;
  font-weight: 400;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 0 8px 12px;
`;

const Empty = styled.div`
  height: 44px;
`;

const DayCell = styled.button`
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
    outline: 2px solid #eef2ff; /* 오늘 테두리 */
    outline-offset: -2px;
  }
  &[data-selected] {
    background: ${palette.hover.back2};
  }
  &:hover {
    background: ${palette.hover.back2};
  }
`;

const Dot = styled.span`
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${palette.mainNavy.navy100};
  transform: translateX(-50%);
`;

const Divider = styled.hr`
  margin: 8px 0 12px;
  border: none;
  border-top: 1px solid #f1f5f9;
`;

const EmptyList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 8px 8px;
`;

const EmptyText = styled.div`
  color: ${palette.text.body};
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const DateBadge = styled.span`
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

const ListContainer = styled.div`
  /* 320px ~ 1040px 사이에서 유연하게 (캘린더보다 넓게) */
  width: clamp(320px, 92vw, 1040px);
  margin: 16px auto 0;
  padding: 0 8px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 8px 12px;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 16px;
  align-items: center;
  padding: 20px 105px;
  border-radius: 16px;
  border: 1px solid #eef2f7;
  background: #fff;

  /* 모바일(<=520px)에서는 한 줄로 스택 */
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  /* 360~767px: 좌우 여백 줄이기 */
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

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  min-width: 140px;

  /* 모바일에서는 가로로 나란히 */
  @media (max-width: 520px) {
    flex-direction: row;
    align-items: center;
    min-width: 0;
  }

  /* 날짜(YY.MM.DD) + 요일 분리 스타일 */
  .date {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
  }
  .date .ymd {
    color: ${palette.text.primary}; /* 날짜 */
    font-size: 20px;
    font-weight: 600;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  .date .weekday {
    color: ${palette.text.secondary}; /* 요일만 다른 톤 */
    font-size: 14px;
    font-weight: 400;
  }
`;

const Chip = styled.span`
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

const Pager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 0 4px;
`;

const PagerBtn = styled.button`
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
