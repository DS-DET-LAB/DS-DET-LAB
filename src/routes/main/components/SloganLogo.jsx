import useMediaQuery from '@hooks/useMediaQuery';
import * as S from '@main/components/SloganLogoStyle';
import { SLOGAN_TEXTS } from '@main/constants/slogan';
import LogoSimple from '@assets/logo/logo-simple.svg';
import LogoKr from '@assets/logo/logo-kr.svg';

function SloganLogo() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 899px)');

  let viewport = 'desktop';
  if (isMobile) viewport = 'mobile';
  else if (isTablet) viewport = 'tablet';

  return (
    <S.Container viewport={viewport}>
      <S.Slogan>
        {SLOGAN_TEXTS.map((line, lineIndex) => (
          <S.SloganText key={lineIndex} viewport={viewport}>
            {line.map((part, idx) =>
              part.type === 'highlight' ? (
                <S.Highlight key={idx} viewport={viewport}>
                  {part.text}
                </S.Highlight>
              ) : (
                <span key={idx}>{part.text}</span>
              ),
            )}
          </S.SloganText>
        ))}
      </S.Slogan>

      <S.VerticalLine />

      <S.Logo>
        <S.LogoMain src={LogoSimple} viewport={viewport} alt="DET" />
        <S.LogoSub src={LogoKr} viewport={viewport} alt="디지털교육공학센터" />
      </S.Logo>
    </S.Container>
  );
}

export default SloganLogo;
