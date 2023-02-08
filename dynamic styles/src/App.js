import React, { useState } from "react";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [highlighted, setHighlighted] = useState(false);

  const clickHandler = () => {
    setHighlighted((isHighlighted) => !isHighlighted);
  };
  return (
    <div>
      <p style={{ color: highlighted ? "red" : "white" }}>Style me!</p>
      <button className="btn" onClick={clickHandler}>
        Toggle style
      </button>
    </div>
  );
}
