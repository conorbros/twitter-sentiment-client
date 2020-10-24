import React, { useContext, useState } from "react";
import DataTable from "../DataTable/DataTable";
import { TweetContext } from "../../context/TweetContext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
export default function LiveQuery() {
  const { liveQuery } = useContext(TweetContext);
  const [display, setDisplay] = useState(false);
  return (
    <div className={`live-query-section ${display ? "showQuery" : ""}`}>
      <div className="live-query-section__table">
        <DataTable
          titles={["Trending searchs", "Sentiment Score"]}
          data={{ keywords: ["Trump"], sentiment: [0] }}
          keyword={"keywords"}
          multikey
        />
      </div>
      <IconButton onClick={() => setDisplay((prev) => !prev)}>
        {display ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
      </IconButton>
    </div>
  );
}
