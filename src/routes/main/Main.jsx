import { useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import * as M from '@main/MainStyle';
import Shortcut from '@main/components/shortcut/Shortcut';
import SloganLogo from '@main/components/slogan-logo/SloganLogo';
import BusinessCard from '@main/components/business-card/BusinessCard';
import InformModal from '@main/components/inform-modal/InformModal';
import { SHORTCUTS } from '@main/constants/shortcut/Shortcuts';
import { MAIN_BUSINESS } from '@main/constants/business/MainBusiness';

function Main() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isModalOpen, setIsModalOpen] = useState('');

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

      <M.BusinessSection isMobile={isMobile}>
        {MAIN_BUSINESS.map((biz, idx) => (
          <BusinessCard
            key={idx}
            category={biz.category}
            title={biz.title}
            subTitle={biz.subTitle}
            content={biz.content}
          />
        ))}
      </M.BusinessSection>

      {isModalOpen && <InformModal shortcut={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default Main;
