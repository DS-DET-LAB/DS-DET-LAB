/**
 * NewsPagination 컴포넌트
 *
 * 뉴스 페이지에서 NewsItem을 띄워주고, 페이지네이션이 작동하는 컴포넌트입니다.
 * prev나 next 버튼 클릭 시 다음 데이터를 불러옵니다.
 *
 * @param {string[]} data - 정렬한 데이터 배열
 * @param {number} visibleItem - 페이지당 띄워지는 아이템 개수
 * @param {string} title - 제목
 * @param {React.ReactNode} socialBox - 인스타나 유튜브 url 태그
 * @param {boolean} isInsta - 인스타 포스트 여부
 * @param {boolean} isYoutube - 유튜브 여부
 *
 * @example
 * <NewsPagination data={data[]} visibleItem={3} title={title} socialBox={<> </>} isInsta={true} isYoutube={false} />
 *
 * @author 정서영
 **/

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
  const reversedData = data.slice().reverse();
  const currentData = reversedData.slice(start, end);

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
