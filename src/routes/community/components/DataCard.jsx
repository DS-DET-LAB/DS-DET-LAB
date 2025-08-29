import DownloadIcon40 from '@assets/community/ic-download-40.svg?react';

import * as D from './DataCardStyle';

const DataCard = ({ type, title, date, fileName, file }) => {
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

      <D.Button onClick={handleDownload}>
        <DownloadIcon40 />
      </D.Button>
    </D.DataCard>
  );
};

export default DataCard;
