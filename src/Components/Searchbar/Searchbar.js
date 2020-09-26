import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function Searchbar() {
  return (
    <div className="search-section">
      <TextField
        id="filled-basic"
        label="Keyword..."
        variant="outlined"
        size="small"
        className="search-section__textfield"
        InputLabelProps={{ className: "textfield-lable" }}
      />
      <Button variant="contained" style={{ background: "#1da1f2" }}>
        Search
      </Button>
    </div>
  );
}
