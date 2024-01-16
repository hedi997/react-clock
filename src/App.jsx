import React, { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";

function App() {
  return (
    <div>
      <Clock city={"London"} timeZoneh={"Europe/London"} />
      <Timer startTime={500} />
    </div>
  );
}

export default App;
