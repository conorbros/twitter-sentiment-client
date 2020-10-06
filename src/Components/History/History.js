import React, { useContext } from "react";
import { TweetContext } from "../../Context/TweetContext";
import DataTable from "../DataTable/DataTable";
export default function History() {
  const { goodWords, badWords } = useContext(TweetContext);
  return (
    <div className="history-section">
      <DataTable
        title="Top Common Good Words"
        data={goodWords}
        className="history"
      />
      <DataTable
        title="Top Common Bad Words"
        data={badWords}
        className="history"
      />
    </div>
  );
}
