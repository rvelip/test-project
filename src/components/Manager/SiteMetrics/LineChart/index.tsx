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
    Complete: 10,
    Planned: 10
  },
  {
    name: "7:30 AM",
    Complete: 40,
    Planned: 50
  },
  {
    name: "8:00 AM",
    Complete: 51,
    Planned: 100
  },
  {
    name: "8:30 AM",
    Complete: 100,
    Planned: 150
  },
  {
    name: "9:00 AM",
    Complete: 105,
    Planned: 200,
  },
  {
    name: "9:30 AM",
    Complete: 170,
    Planned: 250
  },
  {
    name: "10:00 AM",
    Complete: 176,
    Planned: 300,
  },
  {
    name: "10:30 AM",
    Complete: 250,
    Planned: 350
  },
  {
    name: "11:00 AM",
    Complete: 210,
    Planned: 400
  },
  {
    name: "11:30 AM",
    Complete: 270,
    Planned: 450 
  },
  {
    name: "12:00 PM",
    Complete: 330,
    Planned: 500,
  },
  {
    name: "12:30 AM",
    Complete: 470,
    Planned: 550
  },
  {
    name: "1:00 PM",
    Complete: 360,
    Planned: 525
  },
  {
    name: "1:30 PM",
    Complete: 570,
    Planned: 680
  },
  {
    name: "2:00 PM",
    Complete: 640,
    Planned: 700
  },
  {
    name: "2:30 PM",
    Complete: 700,
    Planned: 720
  },
  {
    name: "3:00 PM",
    Complete: 700,
    Planned: 740
  },
];

export default function LineChartGraph() {
  return (
    <LineChart
      width={800}
      height={350}
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
