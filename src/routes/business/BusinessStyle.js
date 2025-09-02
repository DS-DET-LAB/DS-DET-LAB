import styled from 'styled-components';

export const Business = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) and (max-width: 899px) {
    display: block;
    max-width: 100%;
  }

  @media (max-width: 767px) {
    display: block;
    max-width: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const VisionSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProgramCardWrapper = styled.div`
  width: 90%;
  display: flex;
  gap: 20px;

  @media (min-width: 768px) and (max-width: 899px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 0 10px;

  @media (max-width: 767px) {
    margin: 0 0 17px;
  }
`;
