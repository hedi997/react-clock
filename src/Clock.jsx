import React, { useEffect, useState } from "react";
import "./App.css";

export default function Clock({ city, timeZoneh }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      const t = new Date().toLocaleTimeString("en-GB", {
        timeZone: `${timeZoneh}`,
      });
      setTime(t);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>
        City:{city} <br />
        Time Zone: {timeZoneh} <br />
        {time}
      </h1>
    </div>
  );
}
