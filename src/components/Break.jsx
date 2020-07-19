import React from 'react';
import moment from 'moment';
import {Word, Indicator, StyledButton, GroupWrapper, ButtonsWrapper} from './styles';

const Break = ({breakLength, incrementBreak, decrementBreak}) => {
  const breakLengthMinutes = moment.duration(breakLength, 's').asMinutes();

  return (
    <GroupWrapper>
      <Word id="break-label"> Break </Word>
      <Indicator id="break-length"> {breakLengthMinutes} </Indicator>
      <ButtonsWrapper>
        <StyledButton id="break-decrement" onClick={decrementBreak}>
          -
        </StyledButton>
        <StyledButton id="break-increment" onClick={incrementBreak}>
          +
        </StyledButton>
      </ButtonsWrapper>
    </GroupWrapper>
  );
};

export default Break;
