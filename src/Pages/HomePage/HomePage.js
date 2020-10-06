import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import SearchBar from "../../Components/Searchbar/Searchbar";
import Chart from "../../Components/Chart/Chart";
import History from "../../Components/History/History";
import Tweets from "../../Components/Tweets/Tweets";

export default function HomePage() {
  return (
    <div className="home-page">
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <SearchBar />
          <Chart />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Tweets />
          <History />
        </Grid>
      </Grid>
    </div>
  );
}
