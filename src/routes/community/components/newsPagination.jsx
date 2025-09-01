import * as N from '@community/news/NewsStyle';
import { useState, useEffect } from 'react';
import NewsItem from '@community/components/NewsItem';
import prev from '@assets/common/icon-prev-40.svg?react';
import next from '@assets/common/icon-next-40.svg?react';
import palette from '@styles/theme';

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
          as={prev}
          style={{
            cursor: hasPrev ? 'pointer' : 'default',
            color: hasPrev ? palette.mainNavy.navy80 : palette.text.secondary50,
          }}
          onClick={handlePrev}
        />
        <N.PagingIcon
          as={next}
          style={{
            cursor: hasNext ? 'pointer' : 'default',
            color: hasNext ? palette.mainNavy.navy80 : palette.text.secondary50,
          }}
          onClick={handleNext}
        />
      </N.PageControll>
    </N.Group>
  );
}
