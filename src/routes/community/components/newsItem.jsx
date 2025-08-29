import * as N from '../components/newsItemStyle';
import useMediaQuery from '@hooks/useMediaQuery';

function NewsItem({ url, img, title, date, isInsta }) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <N.NewsItem href={url} style={isInsta && isMobile ? { width: '150px' } : undefined}>
      <N.Img src={img} style={isInsta ? { height: isMobile ? '150px' : '295px' } : undefined} />
      <N.NewsInfo>
        <N.Title>{title}</N.Title>
        <N.Date>{date}</N.Date>
      </N.NewsInfo>
    </N.NewsItem>
  );
}

export default NewsItem;
