import { useEffect, useRef, useState } from 'react';

import useMediaQuery from '@hooks/useMediaQuery';
import DataFiles from '@db/communityData.json';

import ArrowLeft from '@assets/community/ic-arrow-left-40.svg?react';
import ArrowRight from '@assets/community/ic-arrow-40.svg?react';

import Input from '@routes/community/components/Input';
import DataCard from '@routes/community/components/DataCard';
import CommunityHeader from '@routes/community/components/CommunityHeader';

import * as I from '@info/InfoStyle';
import * as D from '@data/DataStyle';

function Data() {
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBusiness, setSelectedBusiness] = useState('전체');
  const [isPaginated, setIsPaginated] = useState(false);

  const businessList = ['전체', ...Array.from(new Set(DataFiles.map((data) => data.business)))];

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
      setSearchedData(getSortedData(DataFiles));
    } else {
      setSearchedData(getSortedData(DataFiles.filter((info) => info.title.toLowerCase().includes(trimmedSearch))));
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

  const handleFilter = (business) => {
    setSelectedBusiness(business);

    if (business === '전체') {
      setSearchedData(getSortedData(DataFiles));
    } else {
      setSearchedData(getSortedData(DataFiles.filter((data) => data.business === business)));
    }

    setCurrentPage(1);
  };

  useEffect(() => {
    if (isPaginated) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage, isPaginated]);

  useEffect(() => {
    setSearchedData(getSortedData(DataFiles));
  }, []);

  return (
    <>
      {(isTablet || isMobile) && <CommunityHeader />}
      <I.Info>
        {!isTablet && !isMobile && <I.Community>커뮤니티</I.Community>}

        <I.InfoWrapper ref={inputRef}>
          <I.InfoText>자료실</I.InfoText>

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

            {!isTablet && !isMobile && (
              <D.BusinessWrapper>
                {businessList.map((business) => (
                  <D.Business
                    key={business}
                    onClick={() => handleFilter(business)}
                    $isActive={selectedBusiness === business}>
                    {business}
                  </D.Business>
                ))}
              </D.BusinessWrapper>
            )}

            <I.InfoCardWrapper $hasNoResult={currentItems.length === 0}>
              {currentItems.map((data) => (
                <DataCard
                  key={data.id}
                  type={data.type}
                  title={data.title}
                  date={data.date}
                  fileName={data.fileName}
                  file={data.file}
                />
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

export default Data;
