import * as N from '@news/NewsStyle';
import NewsItem from '../components/newsItem';
import newsData from '@db/community/news/news.json';
import insta from '@assets/community/logo-insta-navybg-45.svg';
import external from '@assets/community/ic-external-45.svg';
import youtube from '@assets/community/logo-youtube-navybg-45.svg';
import smallYoutube from '@assets/community/logo-youtube-lightnavy-16.svg';
import smallInsta from '@assets/community/logo-insta-lightnavy-16.svg';
import useMediaQuery from '@hooks/useMediaQuery';

function News() {
  const isPc = useMediaQuery('(min-width: 1280px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <N.NewsPage>
      {isPc && (
        <>
          <div style={{ width: '190px', backgroundColor: 'pink' }}>커뮤니티</div>
        </>
      )}
      <N.News>
        <N.Title>센터 소식</N.Title>
        <N.ItemGroup>
          {newsData?.news?.map((data) => (
            <NewsItem
              key={data.id}
              url={data.url}
              img={data.img}
              title={data.title}
              date={data.date}
              isInsta={false}
              isYoutube={false}
            />
          ))}
        </N.ItemGroup>
        <N.Group>
          <N.SocialBox href="https://www.instagram.com/ds.digitaledu/">
            <N.SocialIcon src={isMobile ? smallInsta : insta} />
            @ds.digitaledu
            {!isMobile && <N.External src={external} />}
          </N.SocialBox>
          <N.ItemGroup>
            {newsData?.insta?.map((data) => (
              <NewsItem
                key={data.id}
                url={data.url}
                img={data.img}
                title={data.title}
                date={data.date}
                isInsta={true}
                isYoutube={false}
              />
            ))}
          </N.ItemGroup>
        </N.Group>
        <N.Group>
          <N.SocialBox href="https://www.youtube.com/@DS%EB%94%94%EC%A7%80%ED%84%B8%EA%B5%90%EC%9C%A1%EA%B3%B5%ED%95%99%EC%84%BC%ED%84%B0">
            <N.SocialIcon src={isMobile ? smallYoutube : youtube} />
            @DS디지털교육공학센터
            {!isMobile && <N.External src={external} />}
          </N.SocialBox>
          <N.Playlist>2025 찾아가는 학교 컨설팅</N.Playlist>
          <N.ItemGroup>
            {newsData?.playlist1?.map((data) => (
              <NewsItem
                key={data.id}
                url={data.url}
                img={data.img}
                title={data.title}
                date={data.date}
                isInsta={false}
                isYoutube={true}
              />
            ))}
          </N.ItemGroup>
          <N.Playlist>2025 디지털새싹</N.Playlist>
          <N.ItemGroup>
            {newsData?.playlist2?.map((data) => (
              <NewsItem
                key={data.id}
                url={data.url}
                img={data.img}
                title={data.title}
                date={data.date}
                isInsta={false}
                isYoutube={true}
              />
            ))}
          </N.ItemGroup>
        </N.Group>
      </N.News>
    </N.NewsPage>
  );
}

export default News;
