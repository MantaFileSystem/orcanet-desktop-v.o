import HomePage from "./home/HomePage";
import MarketPage from "./market/MarketPage";
import WalletPage from "./wallet/WalletPage";
import SettingsPage from "./settings/SettingsPage";
import DashboardPage from "./StatsPage/DashboardPage";
import Sidebar from "./sidebar/Sidebar";

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="App" className="size-full flex overflow-hidden">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/stats" element={<HomePage />} /> */}
            {/* <Route path="/store" element={<StorePage />} /> */}
            <Route path="/stats" element={<DashboardPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

const pageMap: { label: string; path: string }[] = [
  { label: "Home", path: "/" },
  { label: "Store", path: "/store" },
  { label: "Stats", path: "/stas" },
  { label: "Market", path: "/market" },
  { label: "Wallet", path: "/wallet" },
  { label: "Settings", path: "/settings" },
];

import { Button } from "@/components/ui/button";

const NavLink = (props: { label: string; path: string }) => {
  return (
    <Link to={props.path}>
      <Button>{props.label}</Button>
    </Link>
  );
};
