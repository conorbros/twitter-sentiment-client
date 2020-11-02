import React, { useContext, useRef } from "react";
import { TweetContext } from "../../TweetContext";
import { TextField, Button } from "@material-ui/core";
import ACTIONS from "../../context/actions/TweetAction";
export default function Searchbar() {
  const { tweetDispatch } = useContext(TweetContext);
  const searchQuery = useRef(null);
  const onSearchHandle = () => {
    tweetDispatch({ type: ACTIONS.SET_QUERY, payload: searchQuery.current });
  };

  return (
    <div className="search-section">
      <TextField
        id="filled-basic"
        label="Keyword"
        variant="outlined"
        size="small"
        onChange={(e) => {
          searchQuery.current = e.target.value;
        }}
        className="search-section__textfield"
        InputLabelProps={{ className: "textfield-lable" }}
      />
      <Button
        variant="contained"
        style={{ background: "#1da1f2" }}
        onClick={onSearchHandle}
      >
        Search
      </Button>
    </div>
  );
}
