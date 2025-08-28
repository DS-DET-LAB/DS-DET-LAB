import { useState } from 'react';

import InfoData from '@db/info.json';

import Input from '@routes/community/components/Input';
import InfoCard from '@routes/community/components/InfoCard';

import * as I from '@info/InfoStyle';

function Info() {
  const [search, setSearch] = useState('');

  return (
    <I.Info>
      <I.Community>커뮤니티</I.Community>

      <I.InfoWrapper>
        <I.InfoText>공지사항</I.InfoText>

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={() => {
            console.log(search);
          }}
          placeholder="검색어를 입력하세요."
        />

        <I.ContentWrapper>
          <I.Count>
            전체 <span>{InfoData.length}</span>건
          </I.Count>

          <I.InfoCardWrapper>
            {InfoData.map((info) => (
              <InfoCard key={info.id} title={info.title} date={info.date} content={info.content} />
            ))}
          </I.InfoCardWrapper>

          <div>
            <button></button>
          </div>
        </I.ContentWrapper>
      </I.InfoWrapper>
    </I.Info>
  );
}

export default Info;
