import React, { useRef, useState } from "react";

const Timer = () => {
  const timerId = useRef(null);
  const [time, setTime] = useState({
    seconds: "",
    minutes: "",
    hours: "",
  });
  let second = time.seconds;
  let minute = time.minutes;
  let hour = time.hours;
  const timer = () => {
    if (second === 60) {
      minute++;
      second = 0;
    }
    second++;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
    setTime({
      seconds: second > 9 ? "" + second : "0" + second,
      minutes: minute > 9 ? "" + minute : "0" + minute,
      hours: hour > 9 ? "" + hour : "0" + hour,
    });
  };
  const handleStartTimer = () => {
    if (!timerId.current) {
      // Prevent multiple intervals
      timerId.current = setInterval(timer, 1000);
    }
  };
  const handlePauseTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null; // Reset timerId
  };
  const handleResetTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null;

    setTime({ seconds: "", minutes: "", hours: "" });
  };
  return (
    <div className="w-full h-[92vh] text-white flex flex-col bg-sky-700 justify-center items-center">
      <h1 className="text-3xl my-4">Timer</h1>
      <div className="tracking-widest">{`${time?.hours?.padStart(
        2,
        0
      )}:${time?.minutes?.padStart(2, 0)}:${time?.seconds?.padStart(
        2,
        0
      )}`}</div>
      <div className="flex my-4 gap-x-7">
        <button
          onClick={handlePauseTimer}
          className="px-2 py-1 rounded-md  bg-red-600"
          type="button"
        >
          Pause
        </button>
        <button
          onClick={handleStartTimer}
          className="px-2 py-1 rounded-md  bg-green-600"
          type="button"
        >
          Start
        </button>
        <button
          onClick={handleResetTimer}
          className="px-2 py-1 rounded-md  bg-yellow-400"
          type="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
