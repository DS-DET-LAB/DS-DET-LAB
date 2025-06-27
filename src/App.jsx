import { Routes, Route } from 'react-router-dom';
import GlobalStyle from '@styles/GlobalStyles';
import Activity from '@activity/Activity';
import Business from '@business/Business';
import Center from '@center/Center';
import Data from '@data/Data';
import Faq from '@faq/Faq';
import Info from '@info/Info';
import Main from '@main/Main';
import News from '@news/News';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/business" element={<Business />} />
        <Route path="/center" element={<Center />} />
        <Route path="/data" element={<Data />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/info" element={<Info />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
