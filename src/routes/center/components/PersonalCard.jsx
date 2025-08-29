/****
 * PersonalCard 컴포넌트는 구성원의 프로필 이미지, 이름/직책, 연락처를 카드 형태로 표시합니다.
 * 리스트에서 반복 사용하기 위한 단일 카드 단위 UI입니다.
 *
 * @component PersonalCard
 * @param {string} photoSrc - 프로필 이미지 경로
 * @param {string} name - 구성원 이름
 * @param {string} role - 직책 또는 역할
 * @param {string} phone - 연락처(전화번호)
 * @param {string} [phoneIconSrc] - 전화 아이콘 이미지 경로(옵션)
 * @example
 * // 사용 예시
 * <PersonalCard photoSrc={img} name="김세진" role="팀장" phone="02-901-8810" phoneIconSrc={phoneIcon} />
 *
 * @author 노진경
 **/

import * as P from '@center/components/PersonalCardStyle';
import phoneIcon from '@assets/center/ic-phone-filled-24.svg';
import garyPhoneIcon from '@assets/center/grayphone.svg';

function PersonalCard({ photoSrc, name, role, phone }) {
  const muted = !phone;
  return (
    <P.Card>
      <P.Left>
        <P.Avatar src={photoSrc} alt={`${name} 프로필`} />
      </P.Left>
      <P.Right>
        <P.NameRow>
          <P.Name>{name}</P.Name>
          <P.Role>{role}</P.Role>
        </P.NameRow>
        <P.PhoneRow>
          <P.PhoneIcon src={phone ? phoneIcon : garyPhoneIcon} alt="전화 아이콘" />
          <P.PhoneText $muted={muted}>{phone || '---'}</P.PhoneText>
        </P.PhoneRow>
      </P.Right>
    </P.Card>
  );
}

export default PersonalCard;
