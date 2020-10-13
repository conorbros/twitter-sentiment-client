import React, { useContext } from "react";
import { TweetContext } from "../../Context/TweetContext";
import DataTable from "../DataTable/DataTable";
import { Paper } from "@material-ui/core";

const paddingKeyValues = (values, amount) => {
  return Array.from({ length: amount }).map((_) => values);
};

const data = {
  date: [
    Array.from({ length: 5 }).map(() => 1601791195156),
    Array.from({ length: 5 }).map(() => 1601793388238),
    Array.from({ length: 5 }).map(() => 1601793407457),
    Array.from({ length: 5 }).map(() => 1602384855497),
    Array.from({ length: 5 }).map(() => 1602385359345),
    Array.from({ length: 5 }).map(() => 1602385681403),
    Array.from({ length: 5 }).map(() => 1602386178834),
    Array.from({ length: 5 }).map(() => 1602409296202),
    Array.from({ length: 5 }).map(() => 1602409633771),
    Array.from({ length: 5 }).map(() => 1602498523703),
    Array.from({ length: 5 }).map(() => 1602503534335),
    Array.from({ length: 5 }).map(() => 1602503548161),
    Array.from({ length: 5 }).map(() => 1602503664428),
  ],
  positiveWords: [
    ["supporters", "good", "positive", "love", "wishing"],
    ["support", "good", "positive", "help", "want"],
    ["good", "supporter", "help", "wish", "positive"],
    ["supporter", "endorsed", "won", "help", "win"],
    ["supporters", "endorsement", "won", "want", "please"],
    ["supporter", "endorses", "won", "wins", "peace"],
    ["supporter", "endorsed", "won", "winning", "peace"],
    ["supporters", "endorse", "good", "wins", "want"],
    ["supporting", "endorsed", "want", "win", "good"],
    ["supporter", "great", "win", "please", "wow"],
    ["super", "great", "win", "peaceful", "won"],
    ["support", "peace", "great", "win", "safe"],
    ["supporter", "great", "won", "peaceful", "win"],
  ],
  negativeWords: [
    ["die", "no", "death", "infections", "sick"],
    ["dire", "no", "violence", "infected", "refuse"],
    ["no", "die", "hatred", "death", "vile"],
    ["corrupt", "no", "scandal", "kill", "worse"],
    ["no", "risk", "killing", "fails", "corrupt"],
    ["no", "risk", "killed", "scandal", "corruption"],
    ["no", "killed", "negative", "illegally", "risk"],
    ["killed", "no", "dead", "illegally", "risk"],
    ["no", "illegal", "risk", "protesters", "stop"],
    ["no", "kill", "crimes", "refused", "wrong"],
    ["no", "stopped", "blocked", "died", "killed"],
    ["no", "suspended", "murder", "bad", "warned"],
    ["no", "warns", "stop", "killed", "shock"],
  ],
  allWords: [
    ["die", "no", "supporters", "good", "positive"],
    ["dire", "no", "support", "good", "positive"],
    ["no", "die", "good", "supporter", "help"],
    ["corrupt", "supporter", "no", "accepting", "endorsed"],
    ["no", "supporters", "endorsement", "won", "accepting"],
    ["no", "supporter", "endorses", "risk", "won"],
    ["supporter", "no", "endorsed", "won", "winning"],
    ["supporters", "killed", "no", "endorse", "good"],
    ["supporting", "no", "endorsed", "want", "win"],
    ["supporter", "great", "no", "please", "wrong"],
    ["super", "no", "great", "won", "stopped"],
    ["support", "peace", "no", "great", "supreme"],
    ["supporter", "great", "warns", "no", "stop"],
  ],
  avgSentiment: [
    Array.from({ length: 5 }).map(() => -0.18814398501271243),
    Array.from({ length: 5 }).map(() => -0.08741258741258741),
    Array.from({ length: 5 }).map(() => -0.10701754385964912),
    Array.from({ length: 5 }).map(() => -0.20666666666666667),
    Array.from({ length: 5 }).map(() => -0.07793103448275862),
    Array.from({ length: 5 }).map(() => -0.1725327812284334),
    Array.from({ length: 5 }).map(() => -0.12447844228094576),
    Array.from({ length: 5 }).map(() => -0.2553763440860215),
    Array.from({ length: 5 }).map(() => -0.18624641833810887),
    Array.from({ length: 5 }).map(() => -0.0031645569620253164),
    Array.from({ length: 5 }).map(() => -0.3193350831146107),
    Array.from({ length: 5 }).map(() => -0.018421052631578946),
    Array.from({ length: 5 }).map(() => -0.12276214833759591),
  ],
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
                key={snapshot.date}
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
