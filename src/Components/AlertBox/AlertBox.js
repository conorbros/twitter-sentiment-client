import React, { useState, useContext } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import { TweetContext } from "../../Context/TweetContext";
import DataTable from "../DataTable/DataTable";

export default function AlertBox() {
  const { alert } = useContext(TweetContext);

  return (
    <div className="alert-box">
      <div className={`alert-box__error ${alert.state ? "show-alert" : ""}`}>
        {alert.message}
      </div>
    </div>
  );
}
