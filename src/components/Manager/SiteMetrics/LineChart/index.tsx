import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "7:00 AM",
    Complete: 1,
    Planned: 5
  },
  {
    name: "8:00 AM",
    Complete: 4,
    Planned: 7,
  },
  {
    name: "9:00 AM",
    Complete: 8,
    Planned: 10,
  },
  {
    name: "10:00 AM",
    Complete: 12,
    Planned: 15,
  },
  {
    name: "11:00 AM",
    Complete: 18,
    Planned: 20
  },
  {
    name: "12:00 PM",
    Complete: 22,
    Planned: 25,
  },
  {
    name: "1:00 PM",
    Complete: 28,
    Planned: 30
  },
  {
    name: "2:00 PM",
    Complete: 34,
    Planned: 40
  },
  {
    name: "3:00 PM",
    Complete: 40,
    Planned: 50
  },
  {
    name: "4:00 PM",
    Complete: 56,
    Planned: 60
  },
  {
    name: "5:00 PM",
    Complete: 68,
    Planned: 70
  },
  {
    name: "6:00 PM",
    Complete: 72,
    Planned: 80
  },
  {
    name: "7:00 PM",
    Complete: 88,
    Planned: 90
  },
  {
    name: "8:00 PM",
    Complete: 95,
    Planned: 100
  }
];

export default function LineChartGraph() {
  return (
    <LineChart
      width={800}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
      <XAxis dataKey="name" tick={{ stroke: '#000000', strokeWidth: 0.7 }} padding={{ right: 4 }} />
      <YAxis dataKey='Complete' tick={{ stroke: '#000000', strokeWidth: 0.7 }} />
      <Tooltip cursor={{ stroke: '#000000', strokeWidth: 1 }} />
      <Legend iconType='square' align='left' />
      <Line
        type="monotone"
        dataKey="Planned"
        stroke="#909295"
        activeDot={{ r: 8 }}
        dot={false}
      />
      <Line type="monotone" dataKey="Complete" stroke="#2469FF" dot={false} />
    </LineChart>
  );
}
