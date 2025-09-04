import * as M from '@main/components/inform-modal/informModalStyle';
import { INFORM_CONTENT } from '@main/constants/inform/CenterInform';
import centerTime from '@db/centerTime.json';
import IcClose from '@assets/common/ic-close-40.svg';

/**
 * InformModal 컴포넌트
 *
 * Shortcut(메일, 전화, 오시는길 등) 클릭 시 나타나는 센터 정보 모달 컴포넌트입니다.
 * DB에 저장된 centerTime 값과 constants에 정의된 INFORM_CONTENT 값을 기반으로 내용을 표시합니다.
 * 메일 또는 전화, 주소 정보와 함께 운영 시간을 보여줍니다.
 * 전달받은 viewport를 통해 반응형으로 사이즈를 조절합니다.
 *
 * @component
 * @param {string} shortcut - 어떤 정보를 표시할지 구분하는 키 값 ("메일" | "전화" | "오시는길")
 * @param {function} onClose - 모달을 닫을 때 실행되는 함수
 * @param {string} viewport - 반응형 (Desktop, Tablet, Mobile)
 *
 * @example
 * // 메일 모달
 * <InformModal shortcut="메일" onClose={() => setIsModalOpen(false)} viewport={viewport} />
 *
 * @author 김서윤
 */

function InformModal({ shortcut, onClose, viewport }) {
  const data = INFORM_CONTENT[shortcut];

  return (
    <M.Background onClick={onClose}>
      <M.Container onClick={(e) => e.stopPropagation()} $viewport={viewport}>
        <M.CloseButton src={IcClose} alt="닫기" onClick={onClose} $viewport={viewport} />

        <M.ContentConatiner>
          <M.CenterInformContainer>
            {data.items.map((item, index) => (
              <M.CenterFrame key={index} $viewport={viewport}>
                <M.CenterTitle $viewport={viewport}>{item.title}</M.CenterTitle>
                <M.CenterDetail $viewport={viewport}>
                  <M.CenterIcon src={data.icon} alt={shortcut} $viewport={viewport} />
                  <M.CenterText $viewport={viewport}>{item.text}</M.CenterText>
                </M.CenterDetail>
              </M.CenterFrame>
            ))}
          </M.CenterInformContainer>

          <M.ContactContainer $viewport={viewport}>
            <M.ContactLine $viewport={viewport} />
            <M.ContactFrame>
              <M.ContactTitle $viewport={viewport}>{centerTime.title}</M.ContactTitle>
              <M.ContactText $viewport={viewport}>
                평일 <M.Highlight>{centerTime.time}</M.Highlight> (주말 및 공휴일 휴무)
              </M.ContactText>
            </M.ContactFrame>
          </M.ContactContainer>
        </M.ContentConatiner>
      </M.Container>
    </M.Background>
  );
}

export default InformModal;
