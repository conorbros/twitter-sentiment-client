import React, { useContext, useRef, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent } from "@material-ui/core";
import { TweetContext } from "../../context/TweetContext";

export default function Chart() {
  const [showHistory, setShowHistory] = useState(false);
  const sentimentCount = useRef(0);
  const { sentiment, historySentiment } = useContext(TweetContext);
  const onHistoryDisplay = () => {
    setShowHistory((prev) => !prev);
  };
  useEffect(() => {
    sentimentCount.current += 1;
  }, [sentiment.length]);
  return (
    <Box width="100%" className="chart-section">
      <Card style={{ margin: "auto" }}>
        <CardContent>
          <LineChart
            width={700}
            height={500}
            data={
              !showHistory
                ? sentiment.map((data, index) => {
                    return {
                      name: index + sentimentCount.current,
                      score: data,
                    };
                  })
                : historySentiment.map((data) => {
                    return {
                      name: data.name,
                      score: data.value,
                    };
                  })
            }
          >
            <Line type="monotone" dataKey="score" stroke="#1da1f2" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis tick={{ fill: "white" }} dataKey="name" />
            <YAxis tick={{ fill: "white" }} domain={[-5.0, 5.0]} />
            <Tooltip />
          </LineChart>
        </CardContent>
      </Card>

      <Button variant="contained" onClick={onHistoryDisplay}>
        {`Display ${showHistory ? "live" : "history"} segments`}
      </Button>
    </Box>
  );
}
