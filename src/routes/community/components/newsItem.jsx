import * as N from '../components/newsItemStyle';
import useMediaQuery from '@hooks/useMediaQuery';

function NewsItem({ url, img, title, date, isInsta, isYoutube }) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <N.NewsItem href={url} style={isInsta && isMobile ? { width: '180px' } : undefined}>
      {isYoutube ? (
        <N.Youtube
          src={img}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></N.Youtube>
      ) : (
        <N.Img src={img} style={isInsta ? { height: isMobile ? '180px' : '295px' } : undefined} />
      )}
      <N.NewsInfo>
        <N.Title>{title}</N.Title>
        <N.Date>{date}</N.Date>
      </N.NewsInfo>
    </N.NewsItem>
  );
}

export default NewsItem;
