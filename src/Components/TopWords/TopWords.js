import React, { useContext } from "react";
import { TweetContext } from "../../Context/TweetContext";
import DataTable from "../DataTable/DataTable";
export default function TopWords() {
  const { goodWords, badWords } = useContext(TweetContext);
  return (
    <div className="top-words-section">
      <DataTable
        titles={["Top Common Good Words"]}
        data={goodWords}
        keyword="words"
        className="top-words"
      />
      <DataTable
        titles={["Top Common Bad Words"]}
        data={badWords}
        keyword="words"
        className="top-words"
      />
    </div>
  );
}
