import styled from 'styled-components';
import palette from '@styles/theme';

function FurueActivity() {
  return (
    <Contianer>
      <Box>
        <Year>2026년</Year>
        <HeadLine>디지털 융합 교육 플랫폼 개발</HeadLine>
        <AboutBox>
          <Line />
          <About>
            차세대 AI 기반 교육 관리 시스템 개발을 목표로 <br />
            연구 및 기획을 진행할 예정입니다.
          </About>
        </AboutBox>
      </Box>
      <Box>
        <Year>2026년</Year>
        <HeadLine>지역 연계 교육 확대 사업</HeadLine>
        <AboutBox>
          <Line />
          <About>
            지역 초·중·고 대상 디지털 교육 지원 사업을 통해 <br />
            실질적인 교육 기회를 확대하고자 합니다.
          </About>
        </AboutBox>
      </Box>
    </Contianer>
  );
}
export default FurueActivity;

export const Contianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  padding: 35px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${palette.hover.back2};
  background: ${palette.background.white};
`;

export const Year = styled.div`
  color: ${palette.text.secondary};
  font-size: 18px;
  font-weight: 400;
`;

export const HeadLine = styled.h3`
  color: ${palette.text.primary};
  font-size: 20px;
  font-weight: 600;
  margin: 3px 0 10.5px;
`;

export const AboutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Line = styled.div`
  width: 3px;
  height: 55px;
  background: ${palette.text.secondary50};
  flex: 0 0 3px;
  display: block;
  border-radius: 5px;
`;

export const About = styled.div`
  color: ${palette.text.body};
  font-size: 18px;
  font-weight: 400;
`;
