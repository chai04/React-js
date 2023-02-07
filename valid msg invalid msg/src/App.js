import React, { useState } from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [messageValidity, setMessageValidity] = useState("Invalid");

  const SubjectChangeHandler = (event) => {
    const value = event.target.value;
    if (value.trim().length < 3) {
      setMessageValidity("Invalid");
    } else {
      setMessageValidity("Valid");
    }
  };
  const messageChangeHandler = (event) => {
    const value = event.target.value;
    if (value.trim().length < 12) {
      setMessageValidity("Invalid");
    } else {
      setMessageValidity("Valid");
    }
  };
  return (
    <form>
      <label>Subject</label>
      <input className="sub" type="text" onChange={SubjectChangeHandler} />
      <label className="ur-msg">Your message</label>
      <input className="msg" type="text" onChange={messageChangeHandler} />
      <p>{messageValidity} message</p>
    </form>
  );
}
