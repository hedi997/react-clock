import { useState, useEffect } from "react";

export default function Timer({ startTime }) {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0) {
        clearInterval(intervalId);
      } else {
        setTime((t) => {
          return t - 1;
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime((t) => {
  //       return t - 1;
  //     });
  //   }, 1000);
  // }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
}
