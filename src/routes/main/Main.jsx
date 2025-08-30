import { useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import * as M from '@main/MainStyle';
import Shortcut from '@main/components/shortcut/Shortcut';
import SloganLogo from '@main/components/slogan-logo/SloganLogo';
import BusinessCard from '@main/components/business-card/BusinessCard';
import MoreButton from '@main/components/more-button/MoreButton';
import InformModal from '@main/components/inform-modal/InformModal';
import { SHORTCUTS } from '@main/constants/shortcut/Shortcuts';
import { MAIN_BUSINESS } from '@main/constants/business/MainBusiness';

function Main() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 899px)');
  const [isModalOpen, setIsModalOpen] = useState('');

  let viewport = 'desktop';
  if (isMobile) viewport = 'mobile';
  else if (isTablet) viewport = 'tablet';

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

      <M.BottomSection viewport={viewport} isBusiness={true}>
        <M.BottomContainer>
          {MAIN_BUSINESS.map((biz, idx) => (
            <BusinessCard
              key={idx}
              category={biz.category}
              title={biz.title}
              subTitle={biz.subTitle}
              content={biz.content}
            />
          ))}
        </M.BottomContainer>
        <M.MoreButtonSection viewport={viewport}>
          <MoreButton text="사업" path="/business" />
        </M.MoreButtonSection>
      </M.BottomSection>

      <M.BottomSection viewport={viewport} isBusiness={false}>
        <M.BottomContainer></M.BottomContainer>
        <M.MoreButtonSection viewport={viewport}>
          <MoreButton text="공지사항" path="/community/info" />
        </M.MoreButtonSection>
      </M.BottomSection>

      {isModalOpen && <InformModal shortcut={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default Main;
