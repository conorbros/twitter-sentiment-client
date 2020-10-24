import React from "react";
import { Paper } from "@material-ui/core";

export default function InformationBox() {
  return (
    <div className="information-box">
      <Paper elevation={10}>
        <p>WELCOME TO OUR TWITTER SENTIMENT ANALYSIS</p>
        <p>
          TO GET THE APPLICATION STARTED, START TYPING A DESIRED KEYWORD IN THE
          SEARCH BAR ABOVE AND PRESS THE SEARCH BUTTON
        </p>
        <p>
          THE TWEET STREAM WILL APPEAR ON YOUR RIGHT AND OUR ANALYSIS SECTION
          WILL APPEAR ON YOUR LEFT
        </p>
      </Paper>
    </div>
  );
}
