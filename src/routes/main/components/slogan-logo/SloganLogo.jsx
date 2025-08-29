import useMediaQuery from '@hooks/useMediaQuery';
import * as S from '@main/components/slogan-logo/sloganLogoStyle';
import { SLOGAN_TEXTS } from '@main/constants/slogan/Slogan';
import LogoSimple from '@assets/logo/logo-simple.svg';
import LogoKr from '@assets/logo/logo-kr.svg';

/**
 * SloganLogo 컴포넌트
 *
 * 대표 슬로건과 로고를 표시하는 컴포넌트입니다.
 * 반응형(`mobile`, `tablet`, `desktop`)에 따라 글자 크기, 여백, 로고 크기를 다르게 적용합니다.
 * 슬로건 문구는 `SLOGAN_TEXTS` 상수에서 관리하며, highlight 여부에 따라 스타일을 분리해 적용합니다.
 *
 * @component
 * @example
 * // 기본 사용
 * <SloganLogo />
 *
 * @author 김서윤
 */

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

      <S.VerticalLine viewport={viewport} />

      <S.Logo>
        <S.LogoMain src={LogoSimple} viewport={viewport} alt="DET" />
        <S.LogoSub src={LogoKr} viewport={viewport} alt="디지털교육공학센터" />
      </S.Logo>
    </S.Container>
  );
}

export default SloganLogo;
