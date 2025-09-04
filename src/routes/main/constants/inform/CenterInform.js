import departmentInform from '@db/departmentInform.json';
import IcMailFill from '@assets/main/ic-mail-fill-24.svg';
import IcPhoneFill from '@assets/main/ic-phone-fill-24.svg';
import IcDirectionFill from '@assets/main/ic-direction-fill-24.svg';

export const INFORM_CONTENT = {
  메일: {
    icon: IcMailFill,
    items: departmentInform['부서'].map((dep) => ({
      title: dep.title,
      text: dep.email,
    })),
  },
  전화: {
    icon: IcPhoneFill,
    items: departmentInform['부서'].map((dep) => ({
      title: dep.title,
      text: dep.phone,
    })),
  },
  오시는길: {
    icon: IcDirectionFill,
    items: departmentInform['부서'].map((dep) => ({
      title: dep.title,
      text: dep.address,
    })),
  },
};
