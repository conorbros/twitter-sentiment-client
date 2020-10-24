import React, { useState, useContext, useEffect } from "react";
import { TweetContext } from "../../context/TweetContext";

export default function AlertBox() {
  const { alertMessage } = useContext(TweetContext);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      setDisplay(true);
      setTimeout(() => setDisplay(false), 5000);
    }
  }, [alertMessage]);

  return (
    <div className={`alert-box ${display ? "show" : "hide"}`}>
      <span className="fas fa-exclamation-circle" />
      <span className="alert-box__content">{`Error: ${alertMessage}`}</span>
      <span
        className="alert-box__close-button"
        onClick={() => setDisplay(false)}
      >
        <span className="fas fa-times" />
      </span>
    </div>
  );
}
