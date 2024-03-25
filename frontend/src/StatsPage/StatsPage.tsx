import Metric from "./Metric";

const StatsPage = () => {
  return (
    <div
      id="stats-page"
      className="flex flex-col grow pt-11 px-14 pb-6 overflow-y-auto scrollbar-none"
    >
      <Metric />
    </div>
  );
};

export default StatsPage;
