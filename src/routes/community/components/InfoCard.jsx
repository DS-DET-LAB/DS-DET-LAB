/**
 * InfoCard 컴포넌트
 *
 * 커뮤니티 / 공지사항에서 각 공지사항 아이템을 나타내는 컴포넌트입니다.
 * 공지사항 내용은 DB(communityInfo)에 위치하며,
 * 각 아이템 클릭 시 공지사항 전문 내용을 확인할 수 있습니다.
 *
 * @component
 * @param {string} title - 화면에 렌더링할 공지사항 제목
 * @param {string} date - 공지를 작성한 날짜
 * @param {string} content - 공지사항 전문 내용
 *
 * @example
 * <InfoCard
 *   key={data.id}
 *   title={data.title}
 *   date={data.date}
 *   content={data.content}
 * />
 *
 * @author 김진효
 */

import { useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';

import ArrowUp32 from '@assets/community/ic-arrow-up-32.svg?react';
import ArrowUp24 from '@assets/community/ic-arrow-up-24.svg?react';
import ArrowDown32 from '@assets/community/ic-arrow-down-32.svg?react';
import ArrowDown24 from '@assets/community/ic-arrow-down-24.svg?react';

import * as I from './InfoCardStyle';

const InfoCard = ({ title, date, content }) => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const firstSentence = content.split('.')[0].trim();
  const displaySentence = `${firstSentence}.\n...`;

  return (
    <I.InfoCard onClick={() => setShowAll((prev) => !prev)}>
      <I.TopWrapper>
        <div>
          <I.Title>{title}</I.Title>
          <I.Date>{date}</I.Date>
        </div>
        {!isMobile && (showAll ? <ArrowUp32 /> : <ArrowDown32 />)}
        {isMobile && (showAll ? <ArrowUp24 /> : <ArrowDown24 />)}
      </I.TopWrapper>

      <div>
        {!showAll && !isMobile && <I.Content>{displaySentence}</I.Content>}
        {!showAll && isMobile && <I.Content>{firstSentence}</I.Content>}

        {showAll && <I.Content $showAll={true}>{content}</I.Content>}
      </div>
    </I.InfoCard>
  );
};

export default InfoCard;
