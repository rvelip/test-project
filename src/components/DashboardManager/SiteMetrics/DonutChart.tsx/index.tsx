import React, { useRef, useEffect } from 'react';
// import * as d3 from 'd3';

function DonutChart(props: any) {
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

  return (
    // <svg ref={svgRef} width={width} height={height}></svg>
    <h1>Donut Chart</h1>
  );
}

export default DonutChart;
