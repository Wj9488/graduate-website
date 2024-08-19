// components/Clock.js
import { useState, useEffect } from 'react';

const GMTClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const current = new Date();
      let hours = current.getHours();
      const minutes = current.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'pm';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
      const timeString = `${hours}:${minutesStr} ${ampm}`;
      setTime(timeString);
    };

    updateClock(); 
    const intervalId = setInterval(updateClock, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <span className='text__c_contrast'>{time}</span>
  );
};

export default GMTClock;
