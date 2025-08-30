import socialAccount from '@db/socialAccount.json';
import departmentMail from '@db/departmentMail.json';
import IcMailFill from '@assets/main/ic-mail-fill-24.svg';
import IcPhoneFill from '@assets/main/ic-phone-fill-24.svg';

export const INFORM_CONTENT = {
  메일: {
    icon: IcMailFill,
    items: departmentMail['메일'],
  },
  전화: {
    icon: IcPhoneFill,
    items: [
      {
        title: '센터 전화번호',
        text: socialAccount.phone,
      },
    ],
  },
};
