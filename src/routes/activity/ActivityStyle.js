import styled from 'styled-components';
import palette from '@styles/theme';

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;

export const HeaderName = styled.h1`
  color: ${palette.mainNavy.navy100};
  font-size: 36px;
  font-weight: 600;
`;

export const ToggleBox = styled.div``;

export const ToggleName = styled.div`
  color: ${palette.mainNavy.navy80};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
  }
`;

export const BranchContainer = styled.div`
  display: flex;
  gap: 96px;
`;

// 분기 별 컴포넌트
export const BungiContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;
export const BContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BHeaderBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
`;

export const BHeader = styled.div`
  color: ${palette.text.primary};
  font-size: 20px;
  font-weight: 600;
`;

export const BMonth = styled.div`
  color: ${palette.text.secondary};
  font-size: 14px;
  font-weight: 400;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 15px;
  row-gap: 10px;
  border-radius: 17px;
  border: 1px solid ${palette.hover.back2};
  width: 685px;
`;

export const ListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.div`
  box-sizing: border-box;
  border-radius: 9999px;
  width: 10px;
  height: 10px;
  background-color: ${palette.hover.back2};
`;

export const List = styled.div`
  color: ${palette.mainNavy.navy100};
  font-size: 18px;
  font-weight: 400;
`;
