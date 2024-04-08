import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@/components/ui/ThemeProvider";

const series1: number[] = [44, 55, 13, 43, 52];
const series2: number[] = [14, 25, 33, 43, 22];
// const series3: number[] = [44, 55, 13, 43, 22];
const label1: string[] = ["JPG", "MP3", "EXE", "ZIP", "Others"];
const label2: string[] = ["JPG", "MP3", "EXE", "ZIP", "Others"];
// const label3: string[] = ["Files", "Entertainment", "Luxury", "Tech", "Others"];
const title1: string = "Files Upload This Month";
const title2: string = "Files Download This Month";
// const title3: string = "T3";
const color1: string = "#009dff";
const color2: string = "#fa1653";
// const color3: string = "#7bf21f";

function IncomeGraph({
  stats,
  label,
  title,
  color,
}: {
  stats: number[];
  label: string[];
  title: string;
  color: string;
}) {
  const series: number[] = stats;
  const { theme } = useTheme();

  const options: ApexOptions = {
    // colors: ["#008080", "#FF7F50", "#BCB88A", "#DAA520", "#E6E6FA"],
    chart: {
      type: "pie",
      height: 50,
    },
    legend: {
      labels: {
        colors: theme === "light" ? "black" : "white",
      },
      position: "right",
      offsetY: 0,
      height: 330,
    },
    labels: label,
    theme: {
      monochrome: {
        enabled: true,
        color: color,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            // show: false,
          },
        },
        dataLabels: {
          offset: -5,
        },
      },
    },
    dataLabels: {
      enabled: false,
      //   style: {
      //     colors: ["#000"],
      //   },
      //   background: {
      //     enabled: true,
      //     foreColor: "#000",
      //     borderWidth: 0,
      //   },
    },
    title: {
      text: title,
      style: { color: theme === "light" ? "black" : "white" },
      //   offsetX: 0,
      offsetY: -5,
      align: "center",
    },
  };

  return (
    <div className="max-[1000px]:collapse pt-8 animate__animated animate__fadeInUp">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
}

function MonthlyFileStatsChart() {
  const { theme } = useTheme();

  const series = [
    {
      name: "File Upload",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 100],
    },
    {
      name: "File Download",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
      height: 50,
      foreColor: theme === "light" ? "dark" : "white",
      background: theme === "light" ? "white" : "black",
    },
    tooltip: {
      theme: theme === "light" ? "light" : "dark",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
      ],
    },
    yaxis: {
      title: {
        text: "Files  Number",
      },
    },
    colors: ["#4ade80", "#db2777"],
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-black"
      } p-5 rounded-lg`}
    >
      <h3
        className={`${
          theme === "light" ? "text-stone-900" : "text-white"
        } text-xl font-bold`}
      >
        Files Stats
      </h3>
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
}

export default function PieChart() {
  const { theme } = useTheme();

  return (
    <div className=" grid grid-flow-col grid-cols-9 gap-8 mx-8 h-auto">
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-black text-white"
        }bg-white rounded-2xl px-4 col-span-3`}
      >
        <IncomeGraph
          stats={series1}
          label={label1}
          title={title1}
          color={color1}
        />
      </div>
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-black text-white"
        }bg-white rounded-2xl px-4 col-span-3`}
      >
        <IncomeGraph
          stats={series2}
          label={label2}
          title={title2}
          color={color2}
        />
      </div>
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-black text-white"
        }bg-white rounded-2xl px-4 col-span-3`}
      >
        <MonthlyFileStatsChart />
      </div>
    </div>
  );
}
