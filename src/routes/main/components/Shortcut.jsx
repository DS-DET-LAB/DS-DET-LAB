import * as S from '@main/components/ShortCutStyle';

/**
 * Shortcut 컴포넌트
 *
 * 아이콘과 텍스트를 묶어 보여주는 바로가기 컴포넌트입니다.
 * 클릭 시 전달받은 onClick 이벤트를 실행합니다.
 *
 * @component
 * @param {React.ComponentType} Icon - 표시할 SVG 아이콘 컴포넌트
 * @param {string} shortcut - 아이콘 하단에 표시할 텍스트(바로가기 이름)
 * @param {function} onClick - 클릭 시 실행할 함수 (예: 모달, 외부 링크 이동)
 *
 * @example
 * // 인스타그램 바로가기
 * <Shortcut Icon={IcInsta} shortcut="인스타그램" onClick={() => window.open('https://instagram.com/yourpage', '_blank')} />
 *
 * @author 김서윤
 */

function Shortcut({ Icon, shortcut, onClick }) {
  return (
    <S.Container onClick={onClick}>
      <S.IconWrapper as={Icon} />
      <S.ShortcutText>{shortcut}</S.ShortcutText>
    </S.Container>
  );
}

export default Shortcut;
