import * as N from '@news/NewsStyle';
import NewsItem from '../components/newsItem';
import newsData from '@db/community/news/news.json';

function News() {
  return (
    <N.News>
      <N.Title>센터 소식</N.Title>
      <N.Group>
        {newsData?.news?.map((data) => (
          <NewsItem key={data.id} url={data.url} img={data.img} title={data.title} date={data.date} is150={false} />
        ))}
      </N.Group>
    </N.News>
  );
}

export default News;
