import * as M from '@main/components/inform-modal/informModalStyle';
import { INFORM_CONTENT, INFORM_TIME } from '@main/constants/inform/CenterInform';
import IcClose from '@assets/common/ic-close-40.svg';

/**
 * InformModal 컴포넌트
 *
 * Shortcut(메일, 전화 등) 클릭 시 나타나는 센터 정보 모달 컴포넌트입니다.
 * constants에 정의된 INFORM_CONTENT, INFORM_TIME 값을 기반으로 내용을 표시합니다.
 * 메일 또는 전화 정보와 함께 운영 시간을 보여줍니다.
 *
 * @component
 * @param {string} shortcut - 어떤 정보를 표시할지 구분하는 키 값 ("메일" | "전화")
 * @param {function} onClose - 모달을 닫을 때 실행되는 함수
 *
 * @example
 * // 메일 모달
 * <InformModal shortcut="메일" onClose={() => setIsModalOpen(false)} />
 *
 * @author 김서윤
 */

function InformModal({ shortcut, onClose }) {
  const data = INFORM_CONTENT[shortcut];

  return (
    <M.Background onClick={onClose}>
      <M.Container onClick={(e) => e.stopPropagation()}>
        <M.CloseButton src={IcClose} alt="닫기" onClick={onClose} />

        <M.ContentConatiner>
          <M.CenterInformContainer>
            {data.items.map((item, index) => (
              <M.CenterFrame key={index}>
                <M.CenterTitle>{item.title}</M.CenterTitle>
                <M.CenterDetail>
                  <M.CenterIcon src={data.icon} alt={shortcut} />
                  <M.CenterText>{item.text}</M.CenterText>
                </M.CenterDetail>
              </M.CenterFrame>
            ))}
          </M.CenterInformContainer>

          <M.ContactContainer>
            <M.ContactLine />
            <M.ContactFrame>
              <M.ContactTitle>{INFORM_TIME.title}</M.ContactTitle>
              <M.ContactText>
                평일 <M.Highlight>{INFORM_TIME.time}</M.Highlight> (주말 및 공휴일 휴무)
              </M.ContactText>
            </M.ContactFrame>
          </M.ContactContainer>
        </M.ContentConatiner>
      </M.Container>
    </M.Background>
  );
}

export default InformModal;
