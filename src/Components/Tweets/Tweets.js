import React, { useEffect, useContext } from "react";
import { Paper } from "@material-ui/core";
import io from "socket.io-client";
import { TweetContext } from "../../Context/TweetContext";
import axios from "axios";

let socket;
const ENDPOINT = "localhost:8080";

export default function Tweets() {
  const {
    tweets,
    updateTweets,
    query,
    updateWordHistory,
    updateHistorySnapshot,
  } = useContext(TweetContext);

  useEffect(() => {
    socket = io(ENDPOINT);
    if (query) {
      socket.emit("query", { keyword: `${query}` });
      socket.on("tweet", updateTweets);
      socket.on("sentiment", updateWordHistory);
      console.log("hello");
    }
  }, [query]);

  useEffect(() => {
    const fetchHistory = async (keyword) => {
      try {
        const data = await axios.get(
          `http://localhost:8080/history?keyword=${keyword}`
        );
        updateHistorySnapshot(data.data.json.sessions);
      } catch (error) {
        console.log(error);
      }
    };
    if (query) {
      fetchHistory(query);
    }
  }, [query]);

  return (
    <Paper
      elevation={3}
      className={`tweets-section ${query ? "show" : "hide"}`}
    >
      {tweets.slice(0, 15).map((tweet) => {
        return (
          <div className="tweets" key={tweet.id}>
            <div className="tweets__headline">
              <div className="tweets__avatar">
                <img src={tweet.picture} alt="user_image" />
              </div>
              <div className="tweets__author">
                <h3>{tweet.name}</h3>
                <h4>@{tweet.username}</h4>
              </div>
            </div>
            <div className="tweets__content">
              <p>{tweet.text}</p>
            </div>
          </div>
        );
      })}
    </Paper>
  );
}
