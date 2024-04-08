import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useTheme } from "@/components/ui/ThemeProvider";

const Bandwidth: React.FC = () => {
  const { theme } = useTheme();

  const series = [
    {
      name: "In",
      data: [
        {
          x: "2018-09-19T00:00:00.000Z",
          y: 100,
        },
        {
          x: "2018-09-19T01:30:00.000Z",
          y: 120,
        },
        {
          x: "2018-09-19T02:30:00.000Z",
          y: 110,
        },
        {
          x: "2018-09-19T03:30:00.000Z",
          y: 350,
        },
        {
          x: "2018-09-19T04:30:00.000Z",
          y: 100,
        },
        {
          x: "2018-09-19T05:30:00.000Z",
          y: 690,
        },
      ],
    },
    {
      name: "Out",
      data: [
        {
          x: "2018-09-19T00:00:00.000Z",
          y: -50,
        },
        {
          x: "2018-09-19T01:30:00.000Z",
          y: -501,
        },
        {
          x: "2018-09-19T02:30:00.000Z",
          y: -205,
        },
        {
          x: "2018-09-19T03:30:00.000Z",
          y: -550,
        },
        {
          x: "2018-09-19T04:30:00.000Z",
          y: -590,
        },
        {
          x: "2018-09-19T05:30:00.000Z",
          y: -600,
        },
      ],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      foreColor: theme === "light" ? "dark" : "white",
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
    xaxis: {
      type: "datetime",
      // categories: [
      //   "2018-09-19T00:00:00.000Z",
      //   "2018-09-19T01:30:00.000Z",
      //   "2018-09-19T02:30:00.000Z",
      //   "2018-09-19T03:30:00.000Z",
      //   "2018-09-19T04:30:00.000Z",
      //   "2018-09-19T05:30:00.000Z",
      //   "2018-09-19T06:30:00.000Z",
      // ],
    },
    tooltip: {
      theme: theme === "light" ? "light" : "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    // theme: {},
    colors: ["#4ade80", "#db2777"],
    markers: {
      colors: "white",
      size: 1,
    },
    title: {
      text: "BANDWIDTH",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: theme === "light" ? "black" : "white",
        // fontFamily: "Arial, sans-serif",
      },
    },
  };

  return (
    <div className=" ">
      {/* <h3 className="pt-4 text-xl">BANDWIDTH OVER TIME</h3> */}
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default Bandwidth;
