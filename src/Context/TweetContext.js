import React, { createContext, useState, useRef, useCallback } from "react";
export const TweetContext = createContext();

export function TweetContextProvider({ children }) {
  const sentimentRef = useRef([]);
  const tweetsRef = useRef([]);
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState(null);
  const [goodWords, setGoodWords] = useState({ words: [] });
  const [badWords, setBadWords] = useState({ words: [] });
  const [sentiment, setSentiment] = useState([]);
  const [historySentiment, setHistorySentiment] = useState([]);
  const [historySnapshots, setSnapshot] = useState([]);
  const [alert, setAlert] = useState({ state: false, message: null });
  const [liveQuery, setLiveQuery] = useState({ keyword: [] });

  const showAlert = (message, liveQueryData = null) => {
    if (message) {
      setAlert({ state: true, message });
      setTimeout(() => setAlert({ state: false, message }), 1500);
    }
    if (liveQueryData) {
      const mergedQuery = liveQueryData.reduce(
        (merged, query) => {
          return {
            keyword: [...merged.keyword, query.keyword],
            query: [...merged.sentiment, query.sentiment],
          };
        },
        { keyword: [], sentiment: [] }
      );
      setLiveQuery(mergedQuery);
    }
  };
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
      return { name: snapShot.date.toUTCString(), value: snapShot.avgSentiment };
    });
    setHistorySentiment(historySentiment);
  };

  const updateWordHistoryMemoized = useCallback(updateWordHistory, []);
  const updateTweetsMemoized = useCallback(updateTweets, []);
  const updateHistorySnapshotMemoized = useCallback(updateHistorySnapshot, []);
  const showAlertMemoized = useCallback(showAlert, []);

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
        alert,
        liveQuery,
        updateTweetsMemoized,
        setQuery,
        updateWordHistoryMemoized,
        updateHistorySnapshotMemoized,
        showAlertMemoized,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
