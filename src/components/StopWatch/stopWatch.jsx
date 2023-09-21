import React, { useState, useEffect } from 'react';
import '../styles/stopwatch.css'
function StopWatch() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

   
  if (running && (hours > 0 || minutes > 0 || seconds > 0)) {
    interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(interval); // Stop the interval
            setRunning(false);
            // Set a timeout to show the alert after 5 seconds
            setTimeout(() => {
              alert('Countdown completed!');
            }, 5000);
          } else {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
  }

  return () => clearInterval(interval);
}, [running, hours, minutes, seconds]);


  const startTimer = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const resetTimer = () => {
    setRunning(false);
    setHours(6);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className=''>
      <p className="time">
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
      <div className="buttons text-center">
        <button className="btn btn-primary" onClick={startTimer}>
          {running ? 'Pause' : 'Start'}
        </button>
        
      </div>
    </div>
  );
}

export default StopWatch;
