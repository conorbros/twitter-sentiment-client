import React from "react";
import { Paper } from "@material-ui/core";

const tweets = [
  {
    id: "1309653302695489536",
    time_stamp: "Sat Sep 26 00:37:34 +0000 2020",
    content:
      "@Alagai @ianbremmer Yep, an almost theoretically perfect sample of those vulnerable to covid.",
    hashtags: "covid",
    name: "dreamr",
    user_name: "MArstonight",
    user_image_url:
      "https://pbs.twimg.com/profile_images/781424829035483136/M00Zzn0b_normal.jpg",
    url: null,
  },
  {
    id: "1309653237901848576",
    time_stamp: "Sat Sep 26 00:37:18 +0000 2020",
    content:
      "@brendan_hurtig @LSLconstruction @MayneReport @jeff_kennett Hasn’t worked for the Swedes though. The problem is you… https://t.co/ER5fWlc6dH",
    hashtags: "covid",
    name: "cameron0273",
    user_name: "cameron0273",
    user_image_url:
      "https://pbs.twimg.com/profile_images/1268431465500471296/HWMdo8Xf_normal.jpg",
    url: null,
  },
  {
    id: "1309651771006963712",
    time_stamp: "Sat Sep 26 00:31:29 +0000 2020",
    content:
      "RT @RobMax4: Coronavirus Australia live news: Jenny Mikakos resigns as Victoria's Health Minister, Melbourne's 14-day rolling COVID-19 case…",
    hashtags: "covid",
    name: "Bobbie",
    user_name: "Bobduff1",
    user_image_url:
      "https://pbs.twimg.com/profile_images/967319065038483457/8Vy0YzJE_normal.jpg",
    url: "https://t.co/UjKJ6RioLO",
  },
  {
    id: "1309651101122060289",
    time_stamp: "Sat Sep 26 00:28:49 +0000 2020",
    content:
      "RT @Terrytoo69: This Peter Dutton character. WTF does he have to do with Queensland's Covid response?",
    hashtags: "covid",
    name: "Rowena Dazzle",
    user_name: "dazzle_row",
    user_image_url:
      "https://pbs.twimg.com/profile_images/1300568340637786112/V-ayWRhP_normal.jpg",
    url: null,
  },
];

export default function Tweets() {
  return (
    <Paper elevation={3} className="tweets-section">
      {tweets.map((tweet) => {
        return (
          <div className="tweets" key={tweet.id}>
            <div className="tweets__headline">
              <div className="tweets__avatar">
                <img src={tweet.user_image_url} alt="user_image" />
              </div>
              <div className="tweets__author">
                <h3>{tweet.name}</h3>
                <h4>@{tweet.user_name}</h4>
              </div>
            </div>
            <div className="tweets__content">
              <h4>#{tweet.hashtags}</h4>
              <p>
                {tweet.content}{" "}
                {tweet.url && (
                  <a href={tweet.url} target="_blank">
                    More
                  </a>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </Paper>
  );
}
