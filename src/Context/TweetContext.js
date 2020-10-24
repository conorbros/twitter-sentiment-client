import React, {
  createContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import tweetReducer from "./reducers/TweetReducer";
export const TweetContext = createContext();

export function TweetContextProvider({ children }) {
  const [tweetInfo, tweetDispatch] = useReducer(tweetReducer, {
    tweets: [],
    query: null,
    goodWords: { words: [] },
    badWords: { words: [] },
    sentiment: [],
    historySentiment: [],
    databaseSnapshot: [],
    alertMessage: null,
    liveQuery: { keywords: [] },
  });

  // const sentimentRef = useRef([]);
  // const tweetsRef = useRef([]);
  // const timerRef = useRef(0);
  // const [tweets, setTweets] = useState([]);
  // const [query, setQuery] = useState(null);
  // const [goodWords, setGoodWords] = useState({ words: [] });
  // const [badWords, setBadWords] = useState({ words: [] });
  // const [sentiment, setSentiment] = useState([]);
  // const [historySentiment, setHistorySentiment] = useState([]);
  // const [historySnapshots, setSnapshot] = useState([]);
  // const [alert, setAlert] = useState({ state: false, message: null });
  // const [liveQuery, setLiveQuery] = useState({ keyword: [] });

  // useEffect(() => {
  //   timerRef.current = Date.now();
  // }, []);

  // const showAlert = (message, liveQueryData = null) => {
  //   if (message) {
  //     setAlert({ state: true, message });
  //     setTimeout(() => setAlert({ state: false, message }), 1500);
  //   }
  //   if (liveQueryData) {
  //     const mergedQuery = liveQueryData.reduce(
  //       (merged, query) => {
  //         return {
  //           keyword: [...merged.keyword, query.keyword],
  //           query: [...merged.sentiment, query.sentiment],
  //         };
  //       },
  //       { keyword: [], sentiment: [] }
  //     );
  //     setLiveQuery(mergedQuery);
  //   }
  // };
  // const updateTweets = (tweet) => {
  //   const newTweets = Array.from(tweetsRef.current);
  //   newTweets.unshift(tweet);
  //   tweetsRef.current = newTweets.slice(0, 10);
  //   setTweets(tweetsRef.current);
  // };
  // const updateWordHistory = (data) => {
  //   const current = Date.now();
  //   if (current - timerRef.current > 5000) {
  //     const newSentiments = Array.from(sentimentRef.current);
  //     newSentiments.push(data.totalAvg);
  //     sentimentRef.current = newSentiments.slice(-10, -1);
  //     setSentiment(newSentiments);
  //     setGoodWords({ words: data.positive });
  //     setBadWords({ words: data.negative });
  //     timerRef.current = current;
  //   }
  // };
  // const updateHistorySnapshot = (data) => {
  //   setSnapshot(data);
  //   const historySentiment = data.map((snapShot) => {
  //     const time = new Date(snapShot.date);
  //     return {
  //       name: time.toTimeString().split(" ")[0],
  //       value: snapShot.avgSentiment,
  //     };
  //   });
  //   setHistorySentiment(historySentiment);
  // };

  // const updateWordHistoryMemoized = useCallback(updateWordHistory, []);
  // const updateTweetsMemoized = useCallback(updateTweets, []);
  // const updateHistorySnapshotMemoized = useCallback(updateHistorySnapshot, []);
  // const showAlertMemoized = useCallback(showAlert, []);

  return (
    <TweetContext.Provider
      value={{
        ...tweetInfo,
        tweetDispatch,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
