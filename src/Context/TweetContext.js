import React, { createContext, useState, useRef, useCallback } from "react";
import axios from "axios";
export const TweetContext = createContext();

export function TweetContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState(null);
  const [goodWords, setGoodWords] = useState({ words: [] });
  const [badWords, setBadWords] = useState({ words: [] });
  const [sentiment, setSentiment] = useState([]);
  const [historySentiment, setHistorySentiment] = useState([]);
  const tweetsRef = useRef([]);
  const [historySnapshots, setSnapshot] = useState([]);
  const sentimentRef = useRef([]);

  const updateTweets = (tweet) => {
    const newTweets = Array.from(tweetsRef.current);
    newTweets.unshift(tweet);
    tweetsRef.current = newTweets;
    setTweets(tweetsRef.current);
  };
  const updateWordHistory = (data) => {
    const newSentiments = Array.from(sentimentRef.current);
    newSentiments.push(data.totalAvg);
    sentimentRef.current = newSentiments;
    setSentiment(newSentiments);
    setGoodWords({ words: data.positive });
    setBadWords({ words: data.negative });
  };
  const updateHistorySnapshot = (data) => {
    setSnapshot(data);
    const historySentiment = data.map((snapShot) => {
      return { name: snapShot.date, value: snapShot.avgSentiment };
    });
    setHistorySentiment(historySentiment);
  };

  const updateWordHistoryMemoized = useCallback(updateWordHistory, []);
  const updateTweetsMemoized = useCallback(updateTweets, []);
  const updateHistorySnapshotMemoized = useCallback(updateHistorySnapshot, []);
  return (
    <TweetContext.Provider
      value={{
        sentiment,
        tweets,
        query,
        goodWords,
        badWords,
        historySnapshots,
        historySentiment,
        updateTweetsMemoized,
        setQuery,
        updateWordHistoryMemoized,
        updateHistorySnapshotMemoized,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
