import socialAccount from '@db/socialAccount.json';
import IcInsta from '@assets/main/ic-insta-40.svg?react';
import IcYoutube from '@assets/main/ic-youtube-40.svg?react';
import IcMail from '@assets/main/ic-mail-40.svg?react';
import IcPhone from '@assets/main/ic-phone-40.svg?react';
import IcDirection from '@assets/main/ic-direction-40.svg?react';

export const SHORTCUTS = (setIsModalOpen) => [
  {
    Icon: IcInsta,
    shortcut: '인스타그램',
    onClick: () => window.open(socialAccount.instagram, '_blank'),
  },
  {
    Icon: IcYoutube,
    shortcut: '유튜브',
    onClick: () => window.open(socialAccount.youtube, '_blank'),
  },
  { Icon: IcMail, shortcut: '메일', onClick: () => setIsModalOpen('메일') },
  { Icon: IcPhone, shortcut: '전화', onClick: () => setIsModalOpen('전화') },
  { Icon: IcDirection, shortcut: '오시는길', onClick: () => setIsModalOpen('오시는길') },
];
