import { useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';

import * as I from './InfoCardStyle';

const InfoCard = ({ title, date, content }) => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const firstSentence = content.split('.')[0].trim();
  const displaySentence = `${firstSentence}.\n...`;

  return (
    <I.InfoCard onClick={() => setShowAll((prev) => !prev)}>
      <div>
        <I.Title>{title}</I.Title>
        <I.Date>{date}</I.Date>
      </div>

      <div>
        {!showAll && !isMobile && <I.Content>{displaySentence}</I.Content>}
        {!showAll && isMobile && <I.Content>{firstSentence}</I.Content>}

        {showAll && <I.Content $showAll={true}>{content}</I.Content>}
      </div>
    </I.InfoCard>
  );
};

export default InfoCard;
