import React, { useState, useEffect } from "react";
import '../css/Countdown.css';
const Countdown = () => {
  const targetDate = new Date("2025-03-18T00:00:00"); // Set target date
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      // If time runs out, stop the countdown
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container flex justify-center items-center space-x-4 p-4">
      <div className="time-block bg-white text-black p-2 rounded-md">
        <span className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
        <div className="text-sm">HOURS</div>
      </div>
      <div className="time-block bg-white text-black p-2 rounded-md">
        <span className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <div className="text-sm">MINUTES</div>
      </div>
      <div className="time-block bg-white text-black p-2 rounded-md">
        <span className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <div className="text-sm">SECONDS</div>
      </div>
    </div>
  );
};

export default Countdown;
