import React, { useState, useEffect } from 'react';

import { setCookie, getCookie } from 'cookies-next/client';
import { manropeLight } from '@/styles/fonts';

type Props = {
  countdownDuration: number; // Duration in seconds
};

function CountdownTimer({ countdownDuration }: Props) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Check if an end time is stored in localStorage
    const storedEndTime = getCookie('endTime');
    const now = Date.now();

    let endTime;
    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10); //The radix tells parseInt to interpret the string as a base-10 number (the standard decimal system).
    } else {
      endTime = now + countdownDuration * 1000; // Calculate new end time
      setCookie('endTime', endTime); // Store it in localStorage
    }

    const remainingTime = Math.max(0, Math.floor((endTime - now) / 1000));
    setTimeLeft(remainingTime);

    // Start the countdown
    const timer = setInterval(() => {
      const updatedRemainingTime = Math.max(
        0,
        Math.floor((endTime - Date.now()) / 1000)
      );
      setTimeLeft(updatedRemainingTime);

      // Clear interval if timer is complete
      if (updatedRemainingTime <= 0) {
        clearInterval(timer);
        localStorage.removeItem('endTime'); // Clear localStorage after completion
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [countdownDuration]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <p className={`text-lg ${manropeLight.className} text-center`}>
      Expires in {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
}

export default CountdownTimer;
