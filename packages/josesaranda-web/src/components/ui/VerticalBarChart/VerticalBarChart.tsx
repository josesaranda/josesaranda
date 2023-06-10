import React, { useEffect, useRef } from "react";
import { VerticalBarChartSpec } from "./VerticalBarChartSpec";

import "./VerticalBarChart.scss";

type VerticalBarChartProps = {
  data: { key: string; value: number }[];
  xAxis: { name: string };
  yAxis: { name: string };
};

export const VerticalBarChart: React.FC<VerticalBarChartProps> = ({
  data,
  xAxis,
  yAxis,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new VerticalBarChartSpec(ref.current as HTMLDivElement, {
      data,
      xAxis,
      yAxis,
    });
  }, []);

  return <div ref={ref} className="VerticalBarChart"></div>;
};
