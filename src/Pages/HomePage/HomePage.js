import React from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "../../Components/Searchbar/Searchbar";
import Chart from "../../Components/Chart/Chart";
import TopWords from "../../Components/TopWords/TopWords";
import Tweets from "../../Components/Tweets/Tweets";
import History from "../../Components/History/History";

export default function HomePage() {
  return (
    <div className="home-page">
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <SearchBar />
          <Chart />
          <History />
        </Grid>
        <Grid item sm={4} xs={10}>
          <Tweets />
          <TopWords />
        </Grid>
      </Grid>
    </div>
  );
}
