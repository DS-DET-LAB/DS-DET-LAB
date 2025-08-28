import * as N from '../components/newsItemStyle';

function NewsItem({ url, img, title, date, is150 }) {
  return (
    <N.NewsItem href={url} style={is150 && { width: '150px' }}>
      <N.Img src={img} />
      <N.NewsInfo>
        <N.Title>{title}</N.Title>
        <N.Date>{date}</N.Date>
      </N.NewsInfo>
    </N.NewsItem>
  );
}

export default NewsItem;
