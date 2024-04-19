import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  function myfun() {
    setIsVisible(!isVisible);
  }
  return (
    <div className="App" id="main">
      <p id="para" className={isVisible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click" onClick={myfun}>
        click me
      </button>
    </div>
  );
};

export default App;
