import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  BarChart2,
  LineChart,
  WalletCards,
  Sun,
  Moon,
} from "lucide-react";
import { createContext, useContext, useState } from "react";
import { LayoutDashboard, Settings, Package } from "lucide-react";
export const SidebarContext = createContext({ expanded: true });
// export const ThemeContext = createContext({ theme: true });
import { useTheme } from "@/components/ui/ThemeProvider";

import { Link, useLocation } from "react-router-dom";
import orcanetLogo from "./../assets/images/OrcaNet-Dark.png";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  // const [theme, setTheme] = useState(true);
  const { theme, setTheme } = useTheme();

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col ${
          theme === "light" ? "bg-white" : "bg-stone-950"
        } border-r shadow-sm text-lg`}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={orcanetLogo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            } bg-black`}
            alt="OrcaNet"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg  hover:bg-accent"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <Link to="/">
              <SidebarItem
                icon={<LayoutDashboard />}
                text="Home"
                active={isActive("/")}
                alert={false}
              />
            </Link>
            <Link to="/stats">
              <SidebarItem
                icon={<LineChart />}
                text="Stats"
                active={isActive("/stats")}
                alert={false}
              />
            </Link>
            <Link to="/peer">
              <SidebarItem
                icon={<Package />}
                text="Peer"
                active={isActive("/peer")}
                alert={false}
              />
            </Link>
            <Link to="/market">
              <SidebarItem
                icon={<BarChart2 />}
                text="Market"
                active={isActive("/market")}
                alert={false}
              />
            </Link>
            <Link to="/wallet">
              <SidebarItem
                icon={<WalletCards />}
                text="Wallet"
                active={isActive("/wallet")}
                alert={false}
              />
            </Link>
            <Link to="/settings">
              <SidebarItem
                icon={<Settings />}
                text="Settings"
                active={isActive("/settings")}
                alert={false}
              />
            </Link>
          </ul>
        </SidebarContext.Provider>
        <button
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
          className=" flex items-center justify-center pb-4 rounded-lg  hover:bg-accent"
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </button>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=CBC3E3&name=Bubble+Guppies"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-32 ml-3" : "w-0"}
          `}
          >
            <div className={`leading-4 `}>
              <h4 className="font-semibold">Bubble Guppies</h4>
              <span className="text-xs text-gray-600"></span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
