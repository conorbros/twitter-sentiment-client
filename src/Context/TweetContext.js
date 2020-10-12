import React, { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";
export const TweetContext = createContext();

export function TweetContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState(null);
  const [goodWords, setGoodWords] = useState({ words: [] });
  const [badWords, setBadWords] = useState({ words: [] });
  const [sentiment, setSentiment] = useState([]);
  const tweetsRef = useRef([]);
  const [historySnapshots, setSnapshot] = useState({ positiveWords: [] });
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
    const mergedObject = data.reduce(
      (merged, snapshot) => {
        return {
          date: [...merged.date, snapshot.date],
          positiveWords: [...merged.positiveWords, snapshot.positiveWords],
          negativeWords: [...merged.negativeWords, snapshot.negativeWords],
          allWords: [...merged.allWords, snapshot.allWords],
          avgSentiment: [...merged.avgSentiment, snapshot.avgSentiment],
        };
      },
      {
        date: [],
        positiveWords: [],
        negativeWords: [],
        allWords: [],
        avgSentiment: [],
      }
    );
    const quantity = mergedObject.positiveWords[0].length;
    const paddedObject = {
      ...mergedObject,
      date: mergedObject.date.map((_, index) =>
        Array.from({ length: quantity }).map((_) => mergedObject.date[index])
      ),
      avgSentiment: mergedObject.date.map((_, index) =>
        Array.from({ length: quantity }).map(
          (_) => mergedObject.avgSentiment[index]
        )
      ),
    };
    console.log(paddedObject);
    setSnapshot(paddedObject);
  };

  return (
    <TweetContext.Provider
      value={{
        sentiment,
        tweets,
        query,
        goodWords,
        badWords,
        historySnapshots,
        updateTweets,
        setQuery,
        updateWordHistory,
        updateHistorySnapshot,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
