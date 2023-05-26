import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Legend } from "recharts";

const data = [
  { name: "36 Missing Part/Contents", value: 36, fill: "#0F2C6B" },
  { name: "13 Part Damage/Quality Issue", value: 13, fill: "#1A4BB5" },
  { name: "4 Vehicle Damage/Quality Issue", value: 4, fill: "#2469FF" },
  { name: "3 Team Member Not Trained", value: 3, fill: "#6C9BFF" },
  { name: "2 Re-routed", value: 2, fill: "#BBD1FF" },
  { name: "1 Missing Tool", value: 1, fill: "#909295" }
];

const renderColorfulLegendText = (value: string) => {
  return (
    <span style={{ color: "#000000", fontWeight: 400, fontSize: '14px', padding: '5px' }}>
      {value}
    </span>
  );
};

// import * as d3 from 'd3';

function DonutChart() {
  const [domLoaded, setDomLoaded] = useState(false);
  // const { data, width, height } = props;
  // const svgRef = useRef();

  // useEffect(() => {
  //   const svg = d3.select(svgRef.current);
  //   const radius = Math.min(width, height) / 2 - 10;

  //   const color = d3.scaleOrdinal()
  //     .domain(data.map(d => d.label))
  //     .range(["#fbb4ae", "#b3cde3", "#ccebc5"]);

  //   const pie = d3.pie()
  //     .value((d: any) => d.value)
  //     .sort(null);

  //   const arc = d3.arc()
  //     .innerRadius(radius * 0.5)
  //     .outerRadius(radius * 0.8);

  //   const outerArc = d3.arc()
  //     .innerRadius(radius * 0.9)
  //     .outerRadius(radius * 0.9);

  //   const dataWithArc = pie(data);

  //   svg.selectAll("path")
  //     .data(dataWithArc)
  //     .enter()
  //     .append("path")
  //     .attr("d", arc)
  //     .attr("fill", d => color(d.data.label))
  //     .attr("stroke", "white")
  //     .style("stroke-width", "2px")
  //     .style("opacity", 0.7);

  //   svg.selectAll("text")
  //     .data(dataWithArc)
  //     .enter()
  //     .append("text")
  //     .attr("transform", d => `translate(${outerArc.centroid(d)})`)
  //     .attr("text-anchor", "middle")
  //     .text(d => d.data.label)
  //     .style("font-size", "14px");

  // }, [data, height, width]);
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    // <svg ref={svgRef} width={width} height={height}></svg>
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
