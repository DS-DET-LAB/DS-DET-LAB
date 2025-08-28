import { useEffect, useRef, useState } from 'react';

import useMediaQuery from '@hooks/useMediaQuery';
import InfoData from '@db/info.json';

import ArrowLeft from '@assets/community/ic-arrow-left-40.svg?react';
import ArrowRight from '@assets/community/ic-arrow-40.svg?react';

import Input from '@routes/community/components/Input';
import InfoCard from '@routes/community/components/InfoCard';

import * as I from '@info/InfoStyle';

function Info() {
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState(InfoData);
  const [currentPage, setCurrentPage] = useState(1);

  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');

  const inputRef = useRef(null);

  const itemsPerPage = 5;
  const lastItemIdx = currentPage * itemsPerPage;
  const firstItemIdx = lastItemIdx - itemsPerPage;
  const currentItems = searchedData.slice(firstItemIdx, lastItemIdx);

  const handleSearch = () => {
    const trimmedSearch = search.trim().toLowerCase();

    if (trimmedSearch === '') {
      setSearchedData(InfoData);
    } else {
      setSearchedData(
        InfoData.filter(
          (info) =>
            info.title.toLowerCase().includes(trimmedSearch) || info.content.toLowerCase().includes(trimmedSearch),
        ),
      );
    }

    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(searchedData.length / itemsPerPage);
    if (currentPage < maxPage) setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentPage]);

  return (
    <I.Info>
      {!isTablet && <I.Community>커뮤니티</I.Community>}

      <I.InfoWrapper ref={inputRef}>
        <I.InfoText>공지사항</I.InfoText>

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onClick={handleSearch}
          placeholder="검색어를 입력하세요."
        />

        <I.ContentWrapper>
          <I.Count>
            전체 <span>{searchedData.length}</span>건
          </I.Count>

          <I.InfoCardWrapper>
            {currentItems.map((info) => (
              <InfoCard key={info.id} title={info.title} date={info.date} content={info.content} />
            ))}
          </I.InfoCardWrapper>

          <I.ButtonWrapper>
            <I.Pagenation onClick={handlePrevPage} disabled={currentPage === 1}>
              <ArrowLeft />
            </I.Pagenation>

            <I.Pagenation
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(searchedData.length / itemsPerPage)}>
              <ArrowRight />
            </I.Pagenation>
          </I.ButtonWrapper>
        </I.ContentWrapper>
      </I.InfoWrapper>
    </I.Info>
  );
}

export default Info;
