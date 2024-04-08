// import { motion } from "framer-motion";
// import { routeVariants } from "../../helper/RouterAnimation.ts";

import Metric from "./Metric";
import FileStats from "./FileStats";
import { AlignRight, Search } from "lucide-react";

function StatsPageHeader() {
  return (
    <div className="bg-white w-full py-5 px-7 flex justify-between items-center drop-shadow-md">
      <div className="flex items-center gap-2">
        <AlignRight />
        <h1 className="font-bold text-xl">Stats</h1>
      </div>
      <div className="flex items-center relative">
        <input
          type="text"
          className="block m-0 border border-stone-900 rounded-xl pl-3 pr-10 py-1"
          placeholder="Search"
        />
        <Search className="absolute right-2" />
      </div>
    </div>
  );
}

export default function StatsPage() {
  return (
    // <div
    //   id="stats-page"
    //   className="overflow-auto h-full w-full no-scrollbar bg-card"
    // >
    //   <div className="grid grid-cols-1 overflow-y-auto scrollbar-none h-full md:grid-cols-7 ">
    //     <div className="md:col-span-5">
    //       <Metric />
    //     </div>
    //     <div className="md:col-span-2 ">
    //       {/* <UserInfo /> */}
    //       <FileStats />
    //     </div>
    //   </div>
    // </div>
    <div
      id="stats-page"
      className="flex flex-col grow size-full text-black overflow-auto"
    >
      <StatsPageHeader />
      <FileStats />
      <Metric />
    </div>
  );
}
