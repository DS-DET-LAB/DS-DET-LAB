// Activity.jsx
import React, { useEffect, useState } from 'react';
import * as A from '@activity/ActivityStyle';
import ToggleIcon from '@assets/activity/ic-arrow-20.svg';
import YearTimeline from '@routes/activity/components/YearTimeline';
import YearTabs from '@routes/activity/components/YearTabs';
import Bungi from '@routes/activity/components/Bungi';
import FutureActivity from '@routes/activity/components/FutureActivity';
import Results from '@routes/activity/components/Results';
import PhotoAndVideo from '@routes/activity/components/PhotoAndVideo';
import MajorScheduleCalendar from '@routes/activity/components/ScheduleCalendar';
import useMediaQuery from '@hooks/useMediaQuery';
import Line from '@assets/activity/ic-line.svg';

const schedules = [
  { id: 1, title: '디지털 새싹 프로그램 1차', startsAt: '2025-06-19T10:00:00+09:00' },
  { id: 2, title: '디지털 새싹 프로그램 2차', startsAt: '2025-07-03T10:00:00+09:00' },
];

function Activity() {
  // 연도 상태 공유
  const [year, setYear] = useState(2025);

  // 360px ~ 767px
  const isMobileYearTabs = useMediaQuery('(min-width: 360px) and (max-width: 767px)');

  return (
    <A.Activity>
      <A.Container>
        <A.HeaderName>활동 계획</A.HeaderName>

        {/* 연도별 / 분기별 계획표 */}
        <A.ToggleBox>
          <A.ToggleName>
            <img src={ToggleIcon} alt="toggle" width={24} height={24} />
            연도별 / 분기별 계획표
          </A.ToggleName>

          {/* 모바일에서 YearTabs를 ToggleName 바로 아래에 표시 */}
          {isMobileYearTabs && (
            <A.MobileTabsRow>
              <YearTabs years={[2025, 2026, 2027]} value={year} onChange={setYear} size="lg" />
            </A.MobileTabsRow>
          )}

          <A.BranchContainer>
            {/* 모바일에선 YearTimeline 숨김 (렌더 자체를 안 함) */}
            {!isMobileYearTabs && <YearTimeline years={[2025, 2026, 2027]} activeYear={year} height={520} />}

            {/* 분기별 */}
            <A.BungiContainer>
              <Bungi idx={0} />
              <Bungi idx={1} />
              <Bungi idx={2} />
              <Bungi idx={3} />
            </A.BungiContainer>
          </A.BranchContainer>
        </A.ToggleBox>

        {/* 주요 일정 */}
        <A.ToggleBox>
          <A.ToggleName>
            <img src={ToggleIcon} alt="toggle" width={24} height={24} />
            주요 일정
          </A.ToggleName>
          <MajorScheduleCalendar
            schedules={schedules}
            initialMonth="2025-06-01"
            onDateSelect={(d) => console.log('선택 날짜:', d)}
            onScheduleClick={(item) => console.log('선택 일정:', item)}
          />
        </A.ToggleBox>

        {/* 향후 예정 사업 소개 */}
        <A.ToggleBox>
          <A.ToggleName>
            <img src={ToggleIcon} alt="toggle" width={24} height={24} />
            향후 예정 사업 소개
          </A.ToggleName>
          <FutureActivity />
        </A.ToggleBox>
        <A.MobileLine src={Line} alt="line" />
        <A.HeaderName>성과</A.HeaderName>

        {/* 완료된 사업 목록 */}
        <A.ToggleBox>
          <A.ToggleName>
            <img src={ToggleIcon} alt="toggle" width={24} height={24} />
            완료된 사업 목록
          </A.ToggleName>
          <Results />
        </A.ToggleBox>

        {/* 사진 및 영상 콘텐츠 */}
        <A.ToggleBox>
          <A.ToggleName>
            <img src={ToggleIcon} alt="toggle" width={24} height={24} />
            사진 및 영상 콘텐츠
          </A.ToggleName>
          <PhotoAndVideo />
        </A.ToggleBox>
      </A.Container>
    </A.Activity>
  );
}

export default Activity;
