import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin:auto;
  background: #e34f3d;
  padding: 100px 20px 20px;
  color: #ffffff;
  font-family: Comic Sans MS, sans-serif;
  font-size: 36px;
  height: 500px;
  @media (max-width: 576px) {
    height: 670px;
    padding: 20px;
    margin:auto;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Word = styled.div`
  display: inline-block;
`;

export const Indicator = styled.div`
  font-family: Comic Sans MS, sans-serif;
  text-align: center;
`;

export const StyledButton = styled.button`
  width: 50px;
  padding: 8px 0;
  font-family: Comic Sans MS, sans-serif;
  font-weight: 300;
  background: #fffcfc;
  border: none;
  font-size: 28px;
  border-radius: 3px;
  margin: 10px;
`;

export const StyledControlButton = styled(StyledButton)`
  && {
    width: 100px;
  }
  text-align: center;
  color: green;
`;

export const TimerWrapper = styled.div`
  padding: 80px;
  height: 200px;
  width: 200px;
  border-radius: 200px;
  background: #5555ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    height: 150px;
    width: 150px;
    border-radius: 150px;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
`;
