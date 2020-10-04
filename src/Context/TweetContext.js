import React, { createContext, useState, useRef } from "react";
export const TweetContext = createContext();

export function TweetContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState(null);
  const [goodWords, setGoodWords] = useState([]);
  const [badWords, setBadWords] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const tweetsRef = useRef([]);
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
    setGoodWords(data.positive);
    setBadWords(data.negative);
  };

  return (
    <TweetContext.Provider
      value={{
        sentiment,
        tweets,
        query,
        goodWords,
        badWords,
        updateTweets,
        setQuery,
        updateWordHistory,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
