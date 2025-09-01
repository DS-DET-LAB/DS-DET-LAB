import * as N from '@community/news/NewsStyle';
import { useState, useEffect } from 'react';
import NewsItem from '@community/components/NewsItem';
import prev from '@assets/common/icon-prev-40.svg';
import nonPrev from '@assets/common/icon-non-prev-40.svg';
import next from '@assets/common/icon-next-40.svg';
import nonNext from '@assets/common/icon-non-next-40.svg';

export default function NewsPagination({
  data = [],
  visibleItem,
  title,
  socialBox,
  isInsta = false,
  isYoutube = false,
}) {
  const [page, setPage] = useState(0);

  const start = page * visibleItem;
  const end = start + visibleItem;
  const currentData = data.slice(start, end);

  const hasPrev = page > 0;
  const hasNext = end < data.length;

  const handlePrev = () => hasPrev && setPage((p) => p - 1);
  const handleNext = () => hasNext && setPage((p) => p + 1);

  useEffect(() => {
    setPage(0);
  }, [visibleItem]);

  return (
    <N.Group>
      {socialBox}
      {title && <N.Playlist>{title}</N.Playlist>}

      <N.ItemGroup>
        {currentData.map((item) => (
          <NewsItem
            key={item.id}
            url={item.url}
            img={item.img}
            title={item.title}
            date={item.date}
            isInsta={isInsta}
            isYoutube={isYoutube}
          />
        ))}
      </N.ItemGroup>

      <N.PageControll>
        <N.PagingIcon
          src={hasPrev ? prev : nonPrev}
          style={{ cursor: hasPrev ? 'pointer' : 'default' }}
          onClick={handlePrev}
        />
        <N.PagingIcon
          src={hasNext ? next : nonNext}
          style={{ cursor: hasNext ? 'pointer' : 'default' }}
          onClick={handleNext}
        />
      </N.PageControll>
    </N.Group>
  );
}
