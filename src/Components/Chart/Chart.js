import React, { useContext, useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent } from "@material-ui/core";
import { TweetContext } from "../../Context/TweetContext";

export default function Chart() {
  const sentimentCount = useRef(0);
  const { sentiment } = useContext(TweetContext);
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
            data={sentiment.slice(-20, -1).map((data, index) => {
              return { name: index + sentimentCount.current, score: data };
            })}
          >
            <Line type="monotone" dataKey="score" stroke="#1da1f2" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis tick={{ fill: "white" }} dataKey="name" />
            <YAxis tick={{ fill: "white" }} domain={[-5.0, 5.0]} />
            <Tooltip />
          </LineChart>
        </CardContent>
      </Card>
    </Box>
  );
}
