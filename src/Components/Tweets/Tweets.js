import React, { useEffect, useContext, useCallback, useRef } from "react";
import { Paper } from "@material-ui/core";
import io from "socket.io-client";
import { TweetContext } from "../../context/TweetContext";
import axios from "axios";
import ACTIONS from "../../context/actions/TweetAction";

let socket;
const ENDPOINT = "https://conorb.dev/";

export default function Tweets() {
  const showTweets = useRef(false);
  const { tweets, query, tweetDispatch } = useContext(TweetContext);
  const tweetsRef = useRef([]);
  const timerRef = useRef(Date.now());
  const connectRef = useRef(true);
  const sentimentRef = useRef([]);
  socket = io(ENDPOINT, {
    transports: ["websocket"],
    forceNew: "true",
  });

  useEffect(() => {
    if (tweets.length !== 0) {
      showTweets.current = true;
    } else {
      showTweets.current = false;
    }
  }, [tweets]);

  useEffect(() => {
    if (query && !connectRef.current) {
      socket.emit("forceDisconnect");
      socket.emit("query", { keyword: `${query}` });
      socket.emit("currentSessions", query);
    }
    if (query && connectRef.current) {
      connectRef.current = false;
      socket.on("connect_error", (_) =>
        tweetDispatch({
          type: ACTIONS.SET_ALERT_MESSAGE,
          payload: "There was an error in the connection",
        })
      );
      socket.on("connect_failed", (_) =>
        tweetDispatch({
          type: ACTIONS.SET_ALERT_MESSAGE,
          payload: "The connection was fail to be established",
        })
      );
      socket.on("disconnect", (_) =>
        tweetDispatch({
          type: ACTIONS.SET_ALERT_MESSAGE,
          payload: "The connection was disconnected",
        })
      );
      socket.on("query error", (error) =>
        tweetDispatch({
          type: ACTIONS.SET_ALERT_MESSAGE,
          payload: error,
        })
      );
      socket.emit("query", { keyword: `${query}` });
      socket.emit("currentSessions", query);
      socket.on("tweet", (data) => {
        tweetDispatch({
          type: ACTIONS.SET_TWEETS,
          payload: { data, tweetsRef },
        });
      });
      socket.on("sentiment", (data) => {
        tweetDispatch({
          type: ACTIONS.SET_SENTIMENTS,
          payload: { data, timerRef, sentimentRef },
        });
      });
      socket.on("enhanceCalm", () =>
        tweetDispatch({
          type: ACTIONS.SET_ALERT_MESSAGE,
          payload: "Exeeding query search, please slow down",
        })
      );
      socket.on("currentSessions", (queryData) =>
        tweetDispatch({
          type: ACTIONS.SET_LIVE_QUERY,
          payload: queryData,
        })
      );
    }
  }, [query]);

  useEffect(() => {
    const fetchHistory = async (keyword) => {
      try {
        const data = await axios.get(`${ENDPOINT}history?keyword=${keyword}`);
        const tweets = data.data.json;
        if (!tweets) {
          const message = "Sorry, the query is not available";
          tweetDispatch({ type: ACTIONS.SET_ALERT_MESSAGE, payload: message });
        } else {
          tweetDispatch({
            type: ACTIONS.SET_DATABASE_SNAPSHOT,
            payload: tweets.sessions,
          });
          tweetDispatch({
            type: ACTIONS.SET_HISTORY_SENTIMENT,
            payload: tweets.sessions,
          });
        }
      } catch (error) {
        tweetDispatch({
          type: ACTIONS.SET_ALERT_MESSAGE,
          payload: "Sorry, the query history is not available",
        });
      }
    };
    if (query) {
      fetchHistory(query);
    }
  }, [query]);

  return (
    <Paper
      elevation={3}
      className={`tweets-section ${showTweets.current ? "show" : "hide"}`}
    >
      {tweets.map((tweet, index) => {
        return (
          <div className="tweets" key={index}>
            {/* <div className="tweets__headline">
              <div className="tweets__avatar">
                <img src={tweet.picture} alt="user_image" />
              </div>
              <div className="tweets__author">
                <h3>{tweet.name}</h3>
                <h4>@{tweet.username}</h4>
              </div>
            </div> */}
            <div className="tweets__content">
              <p>{tweet.text}</p>
            </div>
          </div>
        );
      })}
    </Paper>
  );
}
