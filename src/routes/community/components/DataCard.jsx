/**
 * DataCard 컴포넌트
 *
 * 커뮤니티 / 자료실에서 각 자료 아이템을 나타내는 컴포넌트입니다.
 * 다운로드 아이콘 클릭 시 DB(communityData)에 저장된 file이 다운로드 되며,
 * 해당 file은 public 폴더 내 community 폴더에 위치합니다.
 *
 * @component
 * @param {string} type - 해당 자료의 종류에 대한 라벨 ex) 신청서, 발표자료 등
 * @param {string} title - 화면에 렌더링할 파일 이름
 * @param {string} date - 자료를 업데이트한 날짜
 * @param {string} fileName - 다운로드 시 저장될 파일 이름
 * @param {string} file - 다운로드 시 저장될 파일 경로
 *
 * @example
 * <DataCard
 *   key={data.id}
 *   type={data.type}
 *   title={data.title}
 *   date={data.date}
 *   fileName={data.fileName}
 *   file={data.file}
 * />
 *
 * @author 김진효
 */

import useMediaQuery from '@hooks/useMediaQuery';

import DownloadIcon40 from '@assets/community/ic-download-40.svg?react';
import DownloadIcon24 from '@assets/community/ic-download-24.svg?react';

import * as D from './DataCardStyle';

const DataCard = ({ type, title, date, fileName, file }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;
    link.click();
  };

  return (
    <D.DataCard>
      <D.SideWrapper>
        <D.InfoWrapper>
          <D.Type>{type}</D.Type>
          <D.Date>{date}</D.Date>
        </D.InfoWrapper>

        <D.Title>{title}</D.Title>
      </D.SideWrapper>

      {!isMobile && (
        <D.Button onClick={handleDownload}>
          <DownloadIcon40 />
        </D.Button>
      )}
      {isMobile && <DownloadIcon24 onClick={handleDownload} />}
    </D.DataCard>
  );
};

export default DataCard;
