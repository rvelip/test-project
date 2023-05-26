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
    number1: 400, 
    Complete: 0,
    Planned: 0
  },
  {
    name: "8:00 AM",
    number1: 320,
    Complete: 10,
    Planned: 20,
  },
  {
    name: "9:00 AM",
    number1: 240,
    Complete: 20,
    Planned: 40,
  },
  {
    name: "10:00 AM",
    number1: 160,
    Complete: 30,
    Planned: 60,
  },
  {
    name: "11:00 AM",
    number1: 80,
    Complete: 40,
    Planned: 80
  }
];

export default function LineChartGraph() {
  return (
    <LineChart
      width={800}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
      <XAxis dataKey="name" tick={{stroke:'#000000', strokeWidth: 0.7}} />
      <YAxis dataKey='number1'tick={{stroke:'#000000', strokeWidth: 0.7}}/>
      <Tooltip cursor={{ stroke: '#000000', strokeWidth: 1 }} />
      <Legend iconType='square' align='left'/>
      <Line
        type="monotone"
        dataKey="Planned"
        stroke="#909295"
        activeDot={{ r: 8 }}
        dot={false}
      />
      <Line type="monotone" dataKey="Complete" stroke="#2469FF"  dot={false}/>
    </LineChart>
  );
}
