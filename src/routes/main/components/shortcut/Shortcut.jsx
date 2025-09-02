import * as S from '@main/components/shortcut/shortCutStyle';

/**
 * Shortcut 컴포넌트
 *
 * 아이콘과 텍스트를 묶어 보여주는 바로가기 컴포넌트입니다.
 * 클릭 시 전달받은 onClick 이벤트를 실행합니다.
 * 전달받은 viewport를 통해 반응형으로 사이즈를 조절합니다.
 *
 * @component
 * @param {React.ComponentType} Icon - 표시할 SVG 아이콘 컴포넌트
 * @param {string} shortcut - 아이콘 하단에 표시할 텍스트(바로가기 이름)
 * @param {function} onClick - 클릭 시 실행할 함수 (예: 모달, 외부 링크 이동)
 * @param {string} viewport - 반응형 (Desktop, Tablet, Mobile)
 *
 * @example
 * // 인스타그램 바로가기
 * <Shortcut Icon={IcInsta} shortcut="인스타그램" onClick={() => window.open('https://instagram.com/yourpage', '_blank')} viewport={viewport} />
 *
 * @author 김서윤
 */

function Shortcut({ Icon, shortcut, onClick, viewport }) {
  return (
    <S.Container onClick={onClick} viewport={viewport}>
      <S.IconWrapper as={Icon} viewport={viewport} />
      {viewport !== 'mobile' && <S.ShortcutText>{shortcut}</S.ShortcutText>}
    </S.Container>
  );
}

export default Shortcut;
