import * as I from './InfoCardStyle';

const InfoCard = ({ title, date, content }) => {
  const firstSentence = content.split('.')[0].trim();
  const displaySentence = `${firstSentence}.\n...`;

  return (
    <I.InfoCard>
      <div>
        <I.Title>{title}</I.Title>
        <I.Date>{date}</I.Date>
      </div>

      <div>
        <I.Content>{displaySentence}</I.Content>
      </div>
    </I.InfoCard>
  );
};

export default InfoCard;
