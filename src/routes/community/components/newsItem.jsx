import * as N from '../components/newsItemStyle';

function NewsItem({ url, img, title, date, isInsta, isYoutube }) {
  return (
    <N.NewsItem href={url} target="_blank">
      {isYoutube ? (
        <N.Youtube
          src={img}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></N.Youtube>
      ) : (
        <N.Img src={img} style={isInsta ? { aspectRatio: 1, height: 'auto' } : undefined} />
      )}
      <N.NewsInfo>
        <N.Title>{title}</N.Title>
        <N.Date>{date}</N.Date>
      </N.NewsInfo>
    </N.NewsItem>
  );
}

export default NewsItem;
