import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/stopwatch.css';

function StopWatch() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [running, setRunning] = useState(false);
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  const history = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    let interval;

    if (running && (hours > 0 || minutes > 0 || seconds >= 0)) {
      console.log(running,hours,minutes,seconds)
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(interval); // Stop the interval
              setRunning(false);
              setCountdownCompleted(true); // Countdown has completed
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

    // Clear the interval when running becomes false
    if (!running) {
      clearInterval(interval);
    }

    // Cleanup function when the component is unmounted
    return () => clearInterval(interval);
  }, [running, hours, minutes, seconds]);

  const startTimer = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  // Function to reset the countdown and clear the completion state
  const resetTimer = () => {
    setRunning(false);
    setCountdownCompleted(false);
    setHours(0);
    setMinutes(0);
    setSeconds(3);
  };

  // Function to navigate to the celebration page
  const navigateToCelebration = () => {
    history('/Celebration'); // Redirect to the celebration page
  };

  // Redirect to the celebration page when countdown is completed
  useEffect(() => {
    if (countdownCompleted) {
      navigateToCelebration();
    }
  }, [countdownCompleted]);

  return (
    <div className=''>
      <p className="time">
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
      <div className="buttons text-center">
        <button className="btn btn-primary" onClick={startTimer}>
          {running ? 'Pause' : 'Start'}
        </button>
        <button className="btn btn-secondary" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
