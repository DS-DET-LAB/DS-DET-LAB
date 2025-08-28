import useMediaQuery from '@hooks/useMediaQuery';

import * as I from './InfoCardStyle';

const InfoCard = ({ title, date, content }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const firstSentence = content.split('.')[0].trim();
  const displaySentence = `${firstSentence}.\n...`;

  return (
    <I.InfoCard>
      <div>
        <I.Title>{title}</I.Title>
        <I.Date>{date}</I.Date>
      </div>

      <div>
        {!isMobile && <I.Content>{displaySentence}</I.Content>}
        {isMobile && <I.Content>{firstSentence}</I.Content>}
      </div>
    </I.InfoCard>
  );
};

export default InfoCard;
