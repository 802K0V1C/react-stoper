import React, { useState, useEffect } from 'react';
import Button from '../Buttons/Buttons';
import formatTime from '../TimeConverter/TimeConverter';

const Timer = () => {

const [time, setTime] = useState(0); 
const [isRunning, setIsRunning] = useState(false); 

useEffect(() => {
    let timeGo; 

    if (isRunning) {
    timeGo = setInterval(() => setTime((prevValue) => prevValue + 10), 10); 
    }
    return () => clearInterval(timeGo); 
}, [isRunning]);

  const handleStart = () => { //check if stoper is running
    setIsRunning(true);
};

  const handleStop = () => { //check if stoper is stopped
    setIsRunning(false);
};

  const handleReset = () => { //check if stoper is reset
    setTime(0);
};

return (
    <div>
    <div>{formatTime(time)}</div>
    <Button action={handleStart}>Start</Button>
    <Button action={handleStop}>Stop</Button>
    <Button action={handleReset}>Reset</Button>
    </div>
);
};

export default Timer;