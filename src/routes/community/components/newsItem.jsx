import * as N from '../components/newsItemStyle';
import img from '@assets/community/im-newsItem1.jpg';

function NewsItem() {
  return (
    <N.NewsItem>
      <N.Img src={img} />
      <N.NewsInfo>
        <N.Title>덕성여대, ‘2025 찾아가는 학교 컨설팅’ 역량강화 워크숍 개최</N.Title>
        <N.Date>2025.07.17</N.Date>
      </N.NewsInfo>
    </N.NewsItem>
  );
}

export default NewsItem;
