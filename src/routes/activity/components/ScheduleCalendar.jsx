/**
 * MajorScheduleCalendar
 * 주요 일정 캘린더 컴포넌트
 *
 * 기능
 * 1) 일정 없는 날짜 클릭 → 날짜 강조 + "일정이 없습니다." 표시
 * 2) 일정 있는 날짜 클릭 → 해당 날짜의 일정 리스트 노출
 * 3) 아무것도 선택 안 함 → 현재 시각 기준 '최신순(다가오는 일정 → 지난 일정)' 리스트
 *
 * Props
 * - schedules {Array<{id: number|string, title: string, startsAt: Date|string}>}
 * - initialMonth {Date|string} 초기 표시 월 (예: "2025-06-01")
 * - onDateSelect {(date|null) => void} 날짜 선택 콜백 (선택 해제 시 null)
 * - onScheduleClick {(item) => void} 일정 아이템 클릭 콜백
 * - pageSize {number} 기본 5 (리스트 페이징 단위)
 *
 * 접근성/기타
 * - 월간 캘린더 영역에 role="grid" 지정
 * - 오늘/선택일 스타일 분리 (data-today, data-selected)
 * - 반응형: 캘린더 영역은 clamp로 폭 제어, 리스트는 더 넓게 표시
 *
 * 사용 예시
 * <MajorScheduleCalendar
 *   schedules={[
 *     { id: 1, title: "디지털 새싹 프로그램 1차", startsAt: "2025-06-19T10:00:00+09:00" },
 *     { id: 2, title: "디지털 새싹 프로그램 2차", startsAt: "2025-07-03T10:00:00+09:00" },
 *   ]}
 *   initialMonth="2025-06-01"
 *   onDateSelect={(d) => console.log(d)}
 *   onScheduleClick={(item) => console.log(item)}
 *   pageSize={5}
 * />
 */

import React, { useMemo, useState } from 'react';
import * as S from '@routes/activity/components/ScheduleCalendarStyle';
import Right from '@assets/activity/ic-right-555.svg';
import Left from '@assets/activity/ic-left-555.svg';

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
  const [viewYear, setViewYear] = useState(startOfDayLocal(new Date()).getFullYear());
  const [viewMonth, setViewMonth] = useState(startOfDayLocal(new Date()).getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [page, setPage] = useState(0);

  const monthStart = new Date(viewYear, viewMonth, 1);
  const monthEnd = new Date(viewYear, viewMonth + 1, 0);
  const firstWeekday = monthStart.getDay();
  const lastDateNum = monthEnd.getDate();

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

  const selectedDateItems = useMemo(() => {
    if (!selectedDate) return [];
    const k = dateKey(selectedDate);
    return byDateMap.get(k) || [];
  }, [selectedDate, byDateMap]);

  const upcomingSorted = useMemo(() => {
    const now = new Date();
    const sorted = schedules.slice().sort((a, b) => toDate(a.startsAt) - toDate(b.startsAt));
    const future = sorted.filter((s) => toDate(s.startsAt) >= startOfDayLocal(now));
    const past = sorted.filter((s) => toDate(s.startsAt) < startOfDayLocal(now));
    return [...future, ...past];
  }, [schedules]);

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
    const isSame = selectedDate && dateKey(selectedDate) === dateKey(d);

    if (isSame) {
      // 같은 날짜 다시 클릭 시 선택 해제
      setSelectedDate(null);
      onDateSelect && onDateSelect(null);
    } else {
      // 다른 날짜 클릭 시 해당 날짜 선택
      setSelectedDate(d);
      onDateSelect && onDateSelect(d);
    }
  };

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let day = 1; day <= lastDateNum; day++) cells.push(new Date(viewYear, viewMonth, day));

  return (
    <S.Wrap>
      <S.CalendarArea>
        <S.Header>
          <S.ArrowButton onClick={goPrevMonth} aria-label="이전 달">
            <img src={Left} width={6} height={10} />
          </S.ArrowButton>
          <S.MonthTitle>
            {viewYear}.{`${viewMonth + 1}`.padStart(2, '0')}
          </S.MonthTitle>
          <S.ArrowButton onClick={goNextMonth} aria-label="다음 달">
            <img src={Right} width={6} height={10} />
          </S.ArrowButton>
        </S.Header>

        <S.WeekHeader>
          {WEEKDAYS.map((w) => (
            <div key={w}>{w}</div>
          ))}
        </S.WeekHeader>

        <S.Grid role="grid" aria-label="월간 캘린더">
          {cells.map((d, i) => {
            if (!d) return <S.Empty key={`e-${i}`} />;
            const key = dateKey(d);
            const isSelected = !!selectedDate && dateKey(selectedDate) === key;
            const hasItems = byDateMap.has(key);
            const isToday = dateKey(d) === dateKey(new Date());
            return (
              <S.DayCell
                key={key}
                onClick={() => handleSelect(d)}
                aria-pressed={isSelected}
                data-selected={isSelected || undefined}
                data-today={isToday || undefined}>
                <span className="num">{d.getDate()}</span>
                {hasItems && <S.Dot aria-hidden />}
              </S.DayCell>
            );
          })}
        </S.Grid>

        <S.Divider />
      </S.CalendarArea>

      {/* 리스트 영역 */}
      {selectedDate ? (
        pagedList.length === 0 ? (
          <S.ListContainer>
            <S.EmptyList>
              <S.DateBadge>
                <span className="ymd">{formatYYMMDD(selectedDate)}</span>
                <span className="weekday">{WEEKDAYS[selectedDate.getDay()]}요일</span>
              </S.DateBadge>
              <S.EmptyText>
                <span className="bullet" />
                일정이 없습니다.
              </S.EmptyText>
            </S.EmptyList>
          </S.ListContainer>
        ) : (
          <S.ListContainer>
            <S.List>
              {pagedList.map((it) => {
                const d = toDate(it.startsAt);
                return (
                  <S.ListItem key={it.id} onClick={() => onScheduleClick && onScheduleClick(it)}>
                    <S.DateBlock>
                      <S.Chip>{ddayLabel(d)}</S.Chip>
                      <div className="date">
                        <span className="ymd">{formatYYMMDD(d)}</span>
                        <span className="weekday">{WEEKDAYS[d.getDay()]}요일</span>
                      </div>
                    </S.DateBlock>

                    <div className="metaRow">
                      <span className="bullet" />
                      <div className="title">{it.title}</div>
                    </div>
                  </S.ListItem>
                );
              })}
            </S.List>
          </S.ListContainer>
        )
      ) : (
        <S.ListContainer>
          <S.List>
            {pagedList.map((it) => {
              const d = toDate(it.startsAt);
              return (
                <S.ListItem key={it.id} onClick={() => onScheduleClick && onScheduleClick(it)}>
                  <S.DateBlock>
                    <S.Chip>{ddayLabel(d)}</S.Chip>
                    <div className="date">
                      <span className="ymd">{formatYYMMDD(d)}</span>
                      <span className="weekday">{WEEKDAYS[d.getDay()]}요일</span>
                    </div>
                  </S.DateBlock>

                  <div className="metaRow">
                    <span className="bullet" />
                    <div className="title">{it.title}</div>
                  </div>
                </S.ListItem>
              );
            })}
          </S.List>

          {totalPages > 1 && (
            <S.Pager>
              <S.PagerBtn disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
                ‹
              </S.PagerBtn>
              <S.PagerBtn
                disabled={page >= totalPages - 1}
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}>
                ›
              </S.PagerBtn>
            </S.Pager>
          )}
        </S.ListContainer>
      )}
    </S.Wrap>
  );
}
