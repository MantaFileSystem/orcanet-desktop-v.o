import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

function IncomeGraph() {
  const series: number[] = [44, 55, 13, 43, 22];

  const options: ApexOptions = {
    chart: {
      type: "donut",
      height: 100,
    },
    legend: {
      labels: {
        colors: "white",
      },
    },
    labels: ["Files", "Entertainment", "Luxury", "Tech", "Others"],
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
}

export default function WalletInfoContainer() {
  return (
    <div
      className="col-span-3 grid grid-cols-2 gap-7"
      style={{ gridTemplateRows: "max-content repeat(2, 1fr)" }}
    >
      <div className="bg-card rounded-2xl">Balance</div>
      <IncomeGraph />
      <div className="bg-card rounded-2xl col-span-2 row-span-2">Table</div>
    </div>
  );
}
