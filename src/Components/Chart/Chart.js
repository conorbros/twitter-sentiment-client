import React from "react";
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

const data = [
  { name: "1200", uv: 0.2, pv: 2400, amt: 2400 },
  { name: "2400", uv: 0.5, pv: 2400, amt: 2400 },
  { name: "4800", uv: 0.3, pv: 2400, amt: 2400 },
  { name: "9600", uv: 0.8, pv: 2400, amt: 2400 },
];

export default function Chart() {
  return (
    <Box width="100%" className="chart-section">
      <Card>
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
