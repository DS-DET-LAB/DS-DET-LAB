import { useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import * as M from '@main/MainStyle';
import Shortcut from '@main/components/Shortcut';
import SloganLogo from '@main/components/SloganLogo';
import InformModal from '@main/components/InformModal';
import { SHORTCUTS } from '@main/constants/Shortcuts';

function Main() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isModalOpen, setIsModalOpen] = useState('메일');

  return (
    <>
      {!isMobile && (
        <M.ShortcutBar>
          {SHORTCUTS(setIsModalOpen).map(({ Icon, shortcut, onClick }) => (
            <Shortcut key={shortcut} Icon={Icon} shortcut={shortcut} onClick={onClick} />
          ))}
        </M.ShortcutBar>
      )}

      <SloganLogo />

      {isModalOpen && <InformModal shortcut={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default Main;
