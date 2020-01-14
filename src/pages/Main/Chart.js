import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar
} from "recharts";
export default () => {
  const data = [
    {
      tag: "就活",
      amount: 41
    },
    {
      tag: "転職",
      amount: 24
    },
    {
      tag: "起業",
      amount: 32
    },
    {
      tag: "恋愛",
      amount: 14
    },
    {
      tag: "引っ越し",
      amount: 61
    },
    {
      tag: "旅行",
      amount: 24
    }
  ].sort((a, b) => b.amount - a.amount);
  return (
    <ResponsiveContainer {...{ width: "100%", height: "100%" }}>
      <BarChart layout="vertical" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="tag" />
        <Bar dataKey="amount" fill="#EF3340" />
      </BarChart>
    </ResponsiveContainer>
  );
};
