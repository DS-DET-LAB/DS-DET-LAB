import * as N from '@news/NewsStyle';
import { useState, useEffect } from 'react';
import NewsItem from '../components/newsItem';
import NewsPagination from '../components/newsPagination';

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
  const Have2Item = useMediaQuery('((min-width: 767px) and (max-width: 967px)) , (max-width: 620px)');
  const Have1Item = useMediaQuery('(max-width: 420px)');

  const [visibleItem, setVisibleItem] = useState(3);

  useEffect(() => {
    if (Have1Item) setVisibleItem(1);
    else if (Have2Item) setVisibleItem(2);
    else setVisibleItem(3);
  }, [Have1Item, Have2Item]);

  return (
    <N.NewsPage>
      {isPc && (
        <>
          <div style={{ width: '190px', backgroundColor: 'pink' }}>커뮤니티</div>
        </>
      )}
      <N.News>
        <N.Title>센터 소식</N.Title>
        <NewsPagination data={newsData?.news} visibleItem={visibleItem} />
        <N.Group>
          <NewsPagination
            data={newsData?.insta}
            visibleItem={visibleItem}
            socialBox={
              <N.SocialBox href="https://www.instagram.com/ds.digitaledu/">
                <N.SocialIcon src={isMobile ? smallInsta : insta} />
                @ds.digitaledu
                {!isMobile && <N.External src={external} />}
              </N.SocialBox>
            }
            isInsta={true}
          />
        </N.Group>
        <N.Group>
          <NewsPagination
            data={newsData?.playlist1}
            visibleItem={visibleItem}
            socialBox={
              <>
                <N.SocialBox href="https://www.youtube.com/@DS%EB%94%94%EC%A7%80%ED%84%B8%EA%B5%90%EC%9C%A1%EA%B3%B5%ED%95%99%EC%84%BC%ED%84%B0">
                  <N.SocialIcon src={isMobile ? smallYoutube : youtube} />
                  @DS디지털교육공학센터
                  {!isMobile && <N.External src={external} />}
                </N.SocialBox>
                <N.Playlist>2025 찾아가는 학교 컨설팅</N.Playlist>
              </>
            }
            isYoutube={true}
          />

          <NewsPagination
            data={newsData?.playlist2}
            visibleItem={visibleItem}
            socialBox={<N.Playlist>2025 디지털새싹</N.Playlist>}
            isYoutube={true}
          />
        </N.Group>
      </N.News>
    </N.NewsPage>
  );
}

export default News;
