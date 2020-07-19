import React from 'react';
import moment from 'moment';
import {Word, Indicator, StyledButton, GroupWrapper, ButtonsWrapper} from './styles';

const Session = ({sessionLength, decrementSession, incrementSession}) => {
  const sessionLengthMinutes = moment.duration(sessionLength, 's').asMinutes();

  return (
    <GroupWrapper>
      <Word id="session-label"> Session </Word>
      <Indicator id="session-length"> {sessionLengthMinutes} </Indicator>
      <ButtonsWrapper>
      <StyledButton id="session-decrement" onClick={decrementSession}>
        -
      </StyledButton>
      <StyledButton id="session-increment" onClick={incrementSession}>
        +
      </StyledButton>
      </ButtonsWrapper>
    </GroupWrapper>
  );
};

export default Session;
