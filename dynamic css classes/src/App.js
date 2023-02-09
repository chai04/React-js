import "./styles.css";

import React, { useState } from "react";

// don't change the Component name "App"
export default function App() {
  const [highlighted, setHighlighted] = useState(false);

  const clickHandler = () => {
    setHighlighted((ishighlighted) => !ishighlighted);
  };
  return (
    <div>
      <p className={highlighted ? "active" : ""}>Style me!</p>
      <button onClick={clickHandler}>Toggle style</button>
    </div>
  );
}
