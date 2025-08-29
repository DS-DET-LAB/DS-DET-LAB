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
