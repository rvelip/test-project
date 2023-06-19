import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Legend } from "recharts";

const renderColorfulLegendText = (value: string) => {
  return (
    <span style={{ color: "#000000", fontWeight: 400, fontSize: '14px', padding: '5px' }}>
      {value}
    </span>
  );
};

// import * as d3 from 'd3';

function DonutChart(props:any) {
  const { data } = props
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    <>
      {domLoaded && (
        <PieChart width={800} height={200}>
          <Legend
            height={36}
            iconType="circle"
            layout='radial'
            verticalAlign="top"
            iconSize={15}
            formatter={renderColorfulLegendText}>
          </Legend>
          <Pie
            data={data}
            cx={365}
            cy={90}
            innerRadius={60}
            outerRadius={95}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          ></Pie>
        </PieChart>
      )
      }
    </>
  );
}

export default DonutChart;
