import React, {useState, useEffect, useRef} from 'react';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import {StyledContainer, StyledControlButton, FlexContainer, TimerWrapper} from './components/styles';

function App() {
  const [breakLength, setBrakeLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentTypeOfTimer, setCurrentTypeOfTimer] = useState('Session');

  const audioElement = useRef(null)
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const decrementBreak = () => {
    const newBrake = breakLength - 60;
    if (newBrake > 0) setBrakeLength(newBrake)
  };
  const incrementBreak = () => {
    const newBrake = breakLength + 60
    if (newBrake <= 3600) setBrakeLength(newBrake)
  };

  const decrementSession = () => {
    const newSession = sessionLength - 60;
    if (newSession>0) setSessionLength(newSession);
  };
  const incrementSession = () => {
    const newSession = sessionLength + 60;
    if(newSession<=3600) setSessionLength(newSession);
  };
  const timerHandler = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
      setIntervalId(null);
    } else {
      setIsRunning(true);
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          let newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) return newTimeLeft;
          audioElement.current.play()
          if (currentTypeOfTimer === 'Session') {
            setCurrentTypeOfTimer('Break');
           return breakLength;
          } else if (currentTypeOfTimer === 'Break') {
            setCurrentTypeOfTimer('Session');
            return sessionLength;
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentTypeOfTimer('Session');
    setSessionLength(1500);
    setBrakeLength(300);
    setTimeLeft(1500);
    setIsRunning(false);
    audioElement.current.load()
  };

  return (
    <div>
      <StyledContainer>
      <FlexContainer>
        <Break 
          breakLength={breakLength}
          incrementBreak={incrementBreak}
          decrementBreak={decrementBreak}
        />
        <TimerWrapper>
        <TimeLeft
          startStopLabel={isRunning ? 'Stop' : 'Start'}
          timerLabel={currentTypeOfTimer}
          timerHandler={timerHandler}
          timeLeft={timeLeft}
        />
        <StyledControlButton id="reset" onClick={handleResetButton}>
            Reset
          </StyledControlButton>
        </TimerWrapper>
        <Session
          sessionLength={sessionLength}
          incrementSession={incrementSession}
          decrementSession={decrementSession}
        />
        </FlexContainer>
        <>
          
          <audio id='beep' ref={audioElement}>
          <source src='https://www.soundjay.com/nature/sounds/lake-waves-01.mp3' type='audio/mpeg'/>
          </audio>
        </>
      </StyledContainer>
    </div>
  );
}

export default App;
