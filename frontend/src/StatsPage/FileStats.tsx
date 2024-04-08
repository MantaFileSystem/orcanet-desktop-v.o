import { useTheme } from "@/components/ui/ThemeProvider";

export default function FileStats() {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-4 gap-7 h-auto py-8 px-16">
      <div className="bg-white dark:bg-black dark:text-white rounded-2xl p-8">
        <h4 className="text-base font-medium flex justify-center">
          File Upload This Month:
        </h4>
        <div className="flex justify-center gap-3 pt-4 break-all">
          <div className="text-5xl font-bold">51</div>
        </div>
        <div className="font-bold text-green-400 flex justify-center pt-3">
          + 120.9%
        </div>
      </div>
      <div className="bg-white dark:bg-black dark:text-white rounded-2xl p-8">
        <h4 className="text-base font-medium flex justify-center">
          File Download This Month:
        </h4>
        <div className="flex justify-center gap-3 pt-4 break-all">
          <div className="text-5xl font-bold">59</div>
        </div>
        <div className="font-bold text-green-400 flex justify-center pt-3">
          + 130.9%
        </div>
      </div>
      <div className="bg-white dark:bg-black dark:text-white rounded-2xl p-8">
        <h4 className="text-base font-medium flex justify-center">
          Revenue Intotal:
        </h4>
        <div className="flex justify-center gap-3 pt-4 break-all">
          <div className="text-5xl font-bold text-green-500">1120</div>
          <div className="text-2xl font-bold ">ORC</div>
        </div>
      </div>
      <div className="bg-white dark:bg-black dark:text-white rounded-2xl p-8">
        <h4 className="text-base font-medium flex justify-center">
          Spending Intotal:
        </h4>
        <div className="flex justify-center gap-3 pt-4 break-all">
          <div className="text-5xl font-bold text-red-500">1456</div>
          <div className="text-2xl font-bold ">ORC</div>
        </div>
      </div>
    </div>
  );
}
