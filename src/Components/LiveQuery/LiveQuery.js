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
          multikey
          titles={["Trending searchs", "Sentiment Score"]}
          data={liveQuery}
          keyword={"keyword"}
        />
      </div>
      <IconButton
        onClick={() => setDisplay((prev) => !prev)}
        disabled={liveQuery["keyword"].length === 0}
      >
        {display ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
      </IconButton>
    </div>
  );
}
