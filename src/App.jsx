import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@hooks/ScrollToTop';
import GlobalStyle from '@styles/GlobalStyles';
import Layout from '@components/Layout';
import Activity from '@activity/Activity';
import Business from '@business/Business';
import Center from '@center/Center';
import Data from '@data/Data';
import Info from '@info/Info';
import Main from '@main/Main';
import News from '@news/News';
import Error from '@error/Error';

function App() {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="activity" element={<Activity />} />
          <Route path="business" element={<Business />} />
          <Route path="center" element={<Center />} />
          <Route path="community/data" element={<Data />} />
          <Route path="community/info" element={<Info />} />
          <Route path="community/news" element={<News />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
