import React from "react";
import "./app.css";
// import LongPulling from "./LongPulling";
// import EventSourcing from "./EventSourcing";
import WebSockets from "./WebSockets";

function App() {
  return (
    <div>
      <WebSockets />
      {/* <EventSourcing /> */}
      {/* <LongPulling /> */}
    </div>
  );
}

export default App;
