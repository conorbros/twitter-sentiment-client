import React, { useContext } from "react";
import { sizing } from "@material-ui/system";
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

const data = [
  { name: "1200", uv: 0.2 },
  { name: "2400", uv: 0.5 },
  { name: "4800", uv: 0.3 },
  { name: "9600", uv: 0.8 },
];

export default function Chart() {
  const { sentiment } = useContext(TweetContext);
  return (
    <Box width="100%" className="chart-section">
      <Card style={{ margin: "auto" }}>
        <CardContent>
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#1da1f2" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis tick={{ fill: "white" }} dataKey="name" />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip />
          </LineChart>
        </CardContent>
      </Card>
    </Box>
  );
}
