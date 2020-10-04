import React, { useContext, useRef } from "react";
import { TweetContext } from "../../Context/TweetContext";
import { TextField, Button } from "@material-ui/core";

export default function Searchbar() {
  const { setQuery } = useContext(TweetContext);
  const searchQuery = useRef(null);
  const onSearchHandle = () => {
    setQuery(searchQuery.current);
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
