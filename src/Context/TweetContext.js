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
    liveQuery: { keyword: [] },
  });

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
