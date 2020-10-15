import React, { useState, useContext } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import { TweetContext } from "../../Context/TweetContext";
import DataTable from "../DataTable/DataTable";

export default function AlertBox() {
  const [showSentiment, setShowSentiment] = useState(false);
  const { alert, liveQuery } = useContext(TweetContext);

  return (
    <div className="alert-box">
      <div className={`alert-box__error ${alert.state ? "show-alert" : ""}`}>
        {alert.message}
      </div>
      <div
        className={`alert-box__sentiment ${
          showSentiment ? "show-sentiment" : ""
        } ${liveQuery.keyword.length === 0 ? "hide" : ""}`}
      >
        <div
          className={`alert-box__sentiment-section ${
            showSentiment ? "show-sentiment" : ""
          }`}
        >
          {showSentiment ? (
            <IconButton
              onClick={() => setShowSentiment((prev) => !prev)}
              aria-label="show"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setShowSentiment((prev) => !prev)}
              aria-label="hide"
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}
          <DataTable
            multikey
            titles={Object.keys(liveQuery)}
            data={liveQuery}
            keyword="keyword"
            className="sentiment"
          />
        </div>
      </div>
    </div>
  );
}
