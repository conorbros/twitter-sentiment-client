import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "../../Components/Searchbar/Searchbar";
import InformationBox from "../../Components/InformationBox/InformationBox";
import Chart from "../../Components/Chart/Chart";
import TopWords from "../../Components/TopWords/TopWords";
import Tweets from "../../Components/Tweets/Tweets";
import History from "../../Components/History/History";
import AlertBox from "../../Components/AlertBox/AlertBox";
import { TweetContext } from "../../Context/TweetContext";
export default function HomePage() {
  const { query } = useContext(TweetContext);
  return (
    <div className="home-page">
      {/* <AlertBox /> */}
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <SearchBar />
          {!query ? <InformationBox /> : <Chart />}
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
