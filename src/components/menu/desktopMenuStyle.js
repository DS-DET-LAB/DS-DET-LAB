import styled from 'styled-components';
import palette from '@styles/theme';

export const SideFloat = styled.aside`
  max-width: 200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: sticky;
  top: calc(50vh - 150px);
  height: fit-content;
  @media (max-width: 899px) {
    display: none;
  }
`;

export const Title = styled.div`
  width: calc(100% - 46px);
  margin-bottom: 15px;
  display: flex;
  padding: 10px 23px;
  align-items: center;
  gap: 7px;
  align-self: stretch;
  border-radius: 10px;
  background: ${palette.mainNavy.navy100};
  box-shadow: 0 0 15px 0 rgba(18, 32, 102, 0.1);
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
`;

export const SubContainer = styled.div`
  width: calc(100% - 10px);
  display: flex;
  padding: 10px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 11px;
  background: #fff;
  box-shadow: 0 0 15px 0 rgba(18, 32, 102, 0.1);
`;

export const SubTitle = styled.div`
  width: calc(100% - 36px);
  border-radius: 5px;
  padding: 10px 18px;
  cursor: pointer;
  color: ${palette.text.primary};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;

  &:hover {
    background: ${palette.hover.back1};
  }

  ${(props) =>
    props.$isActive &&
    `
    background-color: ${palette.mainNavy.navy20};
    font-weight: bold;
    color: ${palette.mainNavy.navy90};
  `}
`;

export const Content = styled.div`
  width: calc(100% - 36px);
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 0 10px 36px;
  color: ${palette.text.body};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.45px;
  &:hover {
    background: ${palette.hover.back1};
  }

  ${(props) =>
    props.$isActive &&
    `
    background-color: ${palette.background.white40};
    font-weight: bold;
    color: ${palette.mainNavy.navy80};
  `}
`;
