/**
 * NewsItem 컴포넌트
 *
 * 뉴스 페이지에서 클릭 시 해당 url로 이동하는 컴포넌트입니다.
 * 인스타나 유튜브의 경우 각각 height와 태그가 달라집니다.
 *
 * @param {string} url - 이동할 url
 * @param {string} img - 띄워질 이미지, isYoutube가 true일 경우 iframe url
 * @param {string} title - 제목
 * @param {string} date - 업로드 날짜
 * @param {boolean} isInsta - 인스타 포스트 여부
 * @param {boolean} isYoutube - 유튜브 여부
 *
 * @example
 * <NewsItem url={url} img={img} title={title} date={date} isInsta={false} isYoutube={true} />
 *
 * @author 정서영
 **/

import * as N from '@community/components/newsItemStyle';
import useMediaQuery from '@hooks/useMediaQuery';

function NewsItem({ url, img, title, date, isInsta, isYoutube }) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <N.NewsItem
      href={url}
      target="_blank"
      style={{ minHeight: isMobile ? (isInsta ? '255px' : '174px') : isInsta ? '391px' : '253px' }}>
      {isYoutube ? (
        <N.Youtube
          src={img}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></N.Youtube>
      ) : (
        <N.ImgWrapper style={isInsta ? { aspectRatio: 1, height: 'auto' } : undefined}>
          <N.Img src={img} />
        </N.ImgWrapper>
      )}
      <N.NewsInfo>
        <N.Title>{title}</N.Title>
        <N.Date>{date}</N.Date>
      </N.NewsInfo>
    </N.NewsItem>
  );
}

export default NewsItem;
