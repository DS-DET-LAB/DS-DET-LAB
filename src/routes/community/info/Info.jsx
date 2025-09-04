import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useMediaQuery from '@hooks/useMediaQuery';
import InfoData from '@db/communityInfo.json';

import ArrowLeft40 from '@assets/community/ic-arrow-left-40.svg?react';
import ArrowLeft20 from '@assets/community/ic-arrow-left-20.svg?react';
import ArrowRight40 from '@assets/community/ic-arrow-right-40.svg?react';
import ArrowRight20 from '@assets/community/ic-arrow-right-20.svg?react';

import Input from '@routes/community/components/Input';
import InfoCard from '@routes/community/components/InfoCard';

import * as I from '@info/InfoStyle';

function Info() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPaginated, setIsPaginated] = useState(false);
  const [openNotice, setOpenNotice] = useState(null);
  const cardRefs = useRef({});

  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');

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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const noticeId = params.get('notice');

    if (noticeId) {
      setOpenNotice(Number(noticeId));
    }
  }, [location]);

  useEffect(() => {
    if (openNotice) {
      const el = cardRefs.current[openNotice];

      let headerHeight = 86;
      if (isMobile) headerHeight = 45 + 38;
      else if (isTablet) headerHeight = 74 + 64;

      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - headerHeight - 10;

      if (el) {
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    }
  }, [openNotice]);

  return (
    <>
      <I.Info>
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

            <I.InfoCardWrapper $hasNoResult={currentItems.length === 0}>
              {currentItems.map((info) => (
                <div key={info.id} ref={(el) => (cardRefs.current[info.id] = el)}>
                  <InfoCard
                    id={Number(info.id)}
                    title={info.title}
                    date={info.date}
                    content={info.content}
                    defaultOpen={Number(info.id) === openNotice}
                  />
                </div>
              ))}
            </I.InfoCardWrapper>

            <I.ButtonWrapper>
              <I.Pagination onClick={handlePrevPage} disabled={currentPage === 1} $isMobile={isMobile}>
                {!isMobile && <ArrowLeft40 />}
                {isMobile && <ArrowLeft20 />}
              </I.Pagination>

              <I.Pagination
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(searchedData.length / itemsPerPage) || searchedData.length === 0}
                $isMobile={isMobile}>
                {!isMobile && <ArrowRight40 />}
                {isMobile && <ArrowRight20 />}
              </I.Pagination>
            </I.ButtonWrapper>
          </I.ContentWrapper>
        </I.InfoWrapper>
      </I.Info>
    </>
  );
}

export default Info;
