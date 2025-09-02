import { useEffect, useRef, useState } from 'react';

import useMediaQuery from '@hooks/useMediaQuery';
import InfoData from '@db/communityInfo.json';

import ArrowLeft from '@assets/community/ic-arrow-left-40.svg?react';
import ArrowRight from '@assets/community/ic-arrow-40.svg?react';
import CommunityHeader from '@routes/community/components/CommunityHeader';

import Input from '@routes/community/components/Input';
import InfoCard from '@routes/community/components/InfoCard';

import * as I from '@info/InfoStyle';

function Info() {
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPaginated, setIsPaginated] = useState(false);

  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const inputRef = useRef(null);

  const itemsPerPage = 5;
  const lastItemIdx = currentPage * itemsPerPage;
  const firstItemIdx = lastItemIdx - itemsPerPage;
  const currentItems = searchedData.slice(firstItemIdx, lastItemIdx);

  const getSortedData = (data) => {
    return [...data].sort((a, b) => Number(b.id) - Number(a.id));
  };

  const handleSearch = () => {
    const trimmedSearch = search.trim().toLowerCase();

    if (trimmedSearch === '') {
      setSearchedData(getSortedData(InfoData));
    } else {
      setSearchedData(
        getSortedData(
          InfoData.filter(
            (info) =>
              info.title.toLowerCase().includes(trimmedSearch) || info.content.toLowerCase().includes(trimmedSearch),
          ),
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
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setIsPaginated(true);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(searchedData.length / itemsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage((prev) => prev + 1);
      setIsPaginated(true);
    }
  };

  useEffect(() => {
    if (isPaginated) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage, isPaginated]);

  useEffect(() => {
    setSearchedData(getSortedData(InfoData));
  }, []);

  return (
    <>
      {(isTablet || isMobile) && <CommunityHeader />}

      <I.Info>
        {!isTablet && !isMobile && <I.Community>커뮤니티</I.Community>}

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
              <I.Pagination onClick={handlePrevPage} disabled={currentPage === 1}>
                <ArrowLeft />
              </I.Pagination>

              <I.Pagination
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(searchedData.length / itemsPerPage) || searchedData.length === 0}>
                <ArrowRight />
              </I.Pagination>
            </I.ButtonWrapper>
          </I.ContentWrapper>
        </I.InfoWrapper>
      </I.Info>
    </>
  );
}

export default Info;
