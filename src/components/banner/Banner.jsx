/**
 * 반응형 배너 이미지를 보여주는 컴포넌트입니다.
 * 사용자의 디바이스 너비에 따라 적절한 배너 이미지를 선택하여 렌더링합니다.
 * 모바일(≤767px), 테블릿(768px~899px), PC(900px 이상)을 기준으로 분기됩니다.
 *
 * @component Banner
 * @example
 * <Banner />
 *
 * @author 목소연
 */

import useMediaQuery from '@hooks/useMediaQuery';
import pcBanner from '@assets/banner/banner-pc.svg';
import tabBanner from '@assets/banner/banner-tab.svg';
import mobileBanner from '@assets/banner/banner-mobile.svg';

const Banner = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 899px)');

  const getBannerImage = () => {
    if (isMobile) return mobileBanner;
    if (isTablet) return tabBanner;
    return pcBanner;
  };

  return (
    <img
      src={getBannerImage()}
      alt="배너"
      style={{ display: 'block', width: '100vw', height: 'auto', boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.05)' }}
    />
  );
};

export default Banner;
