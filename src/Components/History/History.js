import React, { useContext } from "react";
import { TweetContext } from "../../Context/TweetContext";
import DataTable from "../DataTable/DataTable";
import { Paper } from "@material-ui/core";

const paddingKeyValues = (values, amount) => {
  return Array.from({ length: amount }).map((_) => {
    const date = new Date(values);
    const time = date.toTimeString().split(" ")[0];
    return time;
  });
};

export default function History() {
  const { historySnapshots } = useContext(TweetContext);
  return (
    <div className="history-section">
      <Paper elevation={3}>
        {historySnapshots.length !== 0 &&
          historySnapshots.map((snapShot, index) => {
            const snapshot = {
              date: paddingKeyValues(
                snapShot.date,
                snapShot.positiveWords.length
              ),
              positiveWords: snapShot.positiveWords,
              negativeWords: snapShot.negativeWords,
            };
            return (
              <DataTable
                multikey
                key={index}
                titles={Object.keys(snapshot).filter(
                  (key) => key !== "allWords" && key !== "avgSentiment"
                )}
                data={snapshot}
                className="history"
                keyword="positiveWords"
              />
            );
          })}
      </Paper>
    </div>
  );
}
