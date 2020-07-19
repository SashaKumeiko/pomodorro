import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import {Indicator, StyledControlButton, GroupWrapper} from './styles';

momentDurationFormatSetup(moment);

const TimeLeft = ({
  timeLeft,
  timerLabel,
  timerHandler,
  startStopLabel,
}) => {
  const timeLeftInMinutes = moment
    .duration(timeLeft, 's')
    .format('mm:ss', {trim: false});

  return (
    <GroupWrapper>
      <Indicator id="timer-label">{timerLabel}</Indicator>
      <Indicator id="time-left">{timeLeftInMinutes}</Indicator>
      <StyledControlButton id="start_stop" onClick={timerHandler}>
        {startStopLabel}
      </StyledControlButton>
    </GroupWrapper>
  );
};

export default TimeLeft;
