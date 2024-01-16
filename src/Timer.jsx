import { useState, useEffect } from "react";

export default function Timer({ startTime }) {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    setInterval(() => {
      setTime((t) => {
        return t - 1;
      });
    }, 1000);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
}
