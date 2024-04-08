// import Traffic from "./Traffic";
import Bandwidth from "./Bandwidth";
import PieChart from "./PieChart";
import { useTheme } from "@/components/ui/ThemeProvider";

function BandwidthInfo() {
  const { theme } = useTheme();
  return (
    <div className=" grid grid-flow-row grid-rows-2 gap-6 py-12 break-all">
      <div
        className={` ${
          theme === "light" ? "bg-black text-white" : "bg-white text-black"
        } bg-opacity-80 rounded-2xl p-8 `}
      >
        <h4 className="text-xl font-medium flex justify-center ">Incoming</h4>
        <div className="flex justify-center gap-3 pt-4 break-all">
          <div className="text-3xl font-bold text-green-400">50 Kib/s</div>
        </div>
      </div>
      <div
        className={` ${
          theme === "light" ? "bg-black text-white" : "bg-white text-black"
        } bg-opacity-80 rounded-2xl p-8 `}
      >
        <h4 className="text-xl font-medium flex justify-center">Outgoing</h4>
        <div className="flex justify-center gap-3 pt-4 break-all">
          <div className="text-3xl font-bold text-red-500">80 Kib/s</div>
        </div>
      </div>
    </div>
  );
}

export default function Metric() {
  const { theme } = useTheme();

  return (
    <div className="px-8 rounded-2xl bg-opacity-50 size-full">
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-black text-white"
        } rounded-2xl px-16 mx-8 grid grid-cols-5 animate__animated animate__fadeInUp`}
      >
        <div className=" col-span-4 h-full py-16 pr-12">
          <Bandwidth />
        </div>
        <div className=" col-span-1">
          <BandwidthInfo />
        </div>
      </div>
      <div className="max-[1000px]:collapse pt-8 animate__animated animate__fadeInUp">
        <PieChart />
      </div>
      {/* <div className="max-[1000px]:collapse pt-8 animate__animated animate__fadeInUp">
        <Traffic />
      </div> */}
    </div>
  );
}
