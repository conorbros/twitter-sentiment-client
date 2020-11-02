import React, { useState, useContext, useEffect } from "react";
import { TweetContext } from "../../TweetContext";
import ACTIONS from "../../context/actions/TweetAction";
export default function AlertBox() {
  const { alertMessage, tweetDispatch } = useContext(TweetContext);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      setDisplay(true);
      setTimeout(() => {
        tweetDispatch({ type: ACTIONS.SET_ALERT_MESSAGE, payload: null });
        setDisplay(false);
      }, 5000);
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
