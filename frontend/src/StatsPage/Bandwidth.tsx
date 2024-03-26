import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const Bandwidth: React.FC = () => {
  const series = [
    {
      name: "In",
      data: [
        {
          x: 1,
          y: 100,
        },
        {
          x: 2,
          y: 120,
        },
        {
          x: 3,
          y: 110,
        },
        {
          x: 4,
          y: 350,
        },
        {
          x: 5,
          y: 100,
        },
        {
          x: 6,
          y: 690,
        },
      ],
    },
    {
      name: "Out",
      data: [
        {
          x: 1,
          y: -50,
        },
        {
          x: 2,
          y: -501,
        },
        {
          x: 3,
          y: -205,
        },
        {
          x: 4,
          y: -550,
        },
        {
          x: 5,
          y: -590,
        },
        {
          x: 6,
          y: -600,
        },
      ],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      foreColor: "white",
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
      // background: "black",
      // brush: {
      //   enabled: true,
      // },
      // selection: {
      //   enabled: true,
      //   fill: { color: "red" },
      // },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      // curve: "straight",
      curve: "smooth",
    },
    tooltip: {
      theme: "dark",
    },
    // theme: {},
    colors: ["#4ade80", "#db2777"],
    markers: {
      colors: "white",
      size: 1,
    },
  };

  return (
    <div>
      <h3 className="pt-4 text-xl">BANDWIDTH OVER TIME</h3>
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={300}
        />
      </div>
    </div>
  );
};

export default Bandwidth;
