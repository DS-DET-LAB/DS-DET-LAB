import useMediaQuery from '@hooks/useMediaQuery';
import * as M from '@main/MainStyle';
import Shortcut from '@main/components/Shortcut';
import IcInsta from '@assets/main/ic-insta-40.svg?react';
import IcYoutube from '@assets/main/ic-youtube-40.svg?react';
import IcMail from '@assets/main/ic-mail-40.svg?react';
import IcPhone from '@assets/main/ic-phone-40.svg?react';
import IcDirection from '@assets/main/ic-direction-40.svg?react';

function Main() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {!isMobile && (
        <M.ShortcutBar>
          <Shortcut
            Icon={IcInsta}
            shortcut="인스타그램"
            onClick={() => window.open('https://www.instagram.com/ds.digitaledu/', '_blank')}
          />
          <Shortcut
            Icon={IcYoutube}
            shortcut="유튜브"
            onClick={() =>
              window.open(
                'https://www.youtube.com/@DS%EB%94%94%EC%A7%80%ED%84%B8%EA%B5%90%EC%9C%A1%EA%B3%B5%ED%95%99%EC%84%BC%ED%84%B0',
                '_blank',
              )
            }
          />
          <Shortcut Icon={IcMail} shortcut="메일" />
          <Shortcut Icon={IcPhone} shortcut="전화" />
          <Shortcut Icon={IcDirection} shortcut="오시는길" />
        </M.ShortcutBar>
      )}
      <M.Main>메인</M.Main>
    </>
  );
}

export default Main;
