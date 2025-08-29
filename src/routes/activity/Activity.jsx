import * as A from '@activity/ActivityStyle';
import ToggleIcon from '@assets/activity/ic-arrow-20.svg';
import YearTimeline from '@routes/activity/components/YearTimeline';
import Bungi from '@routes/activity/components/Bungi.jsx';
import FutureActivity from '@routes/activity/components/FutureActivity';
function Activity() {
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
          <A.BranchContainer>
            {/* 연도별 */}
            <YearTimeline years={[2025, 2026, 2027]} activeYear={2025} height={520} />
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
        </A.ToggleBox>

        {/* 향후 예정 사업 소개 */}
        <A.ToggleBox>
          <A.ToggleName>
            <img src={ToggleIcon} alt="toggle" width={24} height={24} />
            향후 예정 사업 소개
          </A.ToggleName>
          <FutureActivity />
        </A.ToggleBox>

        <A.HeaderName>성과</A.HeaderName>
        {/* 완료된 사업 목록 */}
        <A.ToggleBox>
          <A.ToggleName>
            <img src={ToggleIcon} alt="toggle" width={24} height={24} />
            완료된 사업 목록
          </A.ToggleName>
        </A.ToggleBox>

        {/* 사진 및 영상 콘텐츠 */}
        <A.ToggleBox>
          <A.ToggleName>
            <img src={ToggleIcon} alt="toggle" width={24} height={24} />
            완료된 사업 목록
          </A.ToggleName>
        </A.ToggleBox>
      </A.Container>
    </A.Activity>
  );
}
export default Activity;
