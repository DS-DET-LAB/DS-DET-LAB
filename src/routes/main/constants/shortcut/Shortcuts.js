import IcInsta from '@assets/main/ic-insta-40.svg?react';
import IcYoutube from '@assets/main/ic-youtube-40.svg?react';
import IcMail from '@assets/main/ic-mail-40.svg?react';
import IcPhone from '@assets/main/ic-phone-40.svg?react';
import IcDirection from '@assets/main/ic-direction-40.svg?react';

export const SHORTCUTS = (setIsModalOpen) => [
  {
    Icon: IcInsta,
    shortcut: '인스타그램',
    onClick: () => window.open('https://www.instagram.com/ds.digitaledu/', '_blank'),
  },
  {
    Icon: IcYoutube,
    shortcut: '유튜브',
    onClick: () =>
      window.open(
        'https://www.youtube.com/@DS%EB%94%94%EC%A7%80%ED%84%B8%EA%B5%90%EC%9C%A1%EA%B3%B5%ED%95%99%EC%84%BC%ED%84%B0',
        '_blank',
      ),
  },
  { Icon: IcMail, shortcut: '메일', onClick: () => setIsModalOpen('메일') },
  { Icon: IcPhone, shortcut: '전화', onClick: () => setIsModalOpen('전화') },
  // TODO: '오시는길' 확인 후 추가
  { Icon: IcDirection, shortcut: '오시는길', onClick: () => {} },
];
