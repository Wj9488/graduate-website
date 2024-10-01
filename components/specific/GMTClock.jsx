import React, { useState, useEffect } from 'react';

const GMTClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const current = new Date();
      let hours = current.getHours();
      const minutes = current.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
      const timeString = `${hours}:${minutesStr} ${ampm}`;
      setTime(timeString);
    };

    updateClock(); // Initial update

    const intervalId = setInterval(() => {
      const now = new Date();
      const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());
      setTimeout(() => {
        updateClock();
        setInterval(updateClock, 60000);
      }, delay);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className=''>{time}</span>
  );
};

export default GMTClock;