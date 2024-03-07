import React, { useCallback, useState } from 'react';
import StatsCard from './components/Cards/StatsCard';
import ChartCard from './components/Cards/ChartCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './WalletPage.css';

const WalletPage = () => {
  // Simulated state data (replace with actual state management later)
  const [walletData] = useState({
    tokenAmount: 1000,
    currency: 'USD',
    totalValue: 5000,
    address: '0xABC123...',
    counters: { token: 60, value: 60, block: 60, chart: 60 },
    toggle: { nodesOnline: true, transactions: true, throughput: true },
    stat: { blocks: 150 },
    chart: {
      nodesOnline: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Nodes Online',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      transactions: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'TX',
            data: [40, 30, 50, 40, 60, 50],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.5)',
          },
          {
            label: 'RX',
            data: [60, 70, 45, 65, 55, 70],
            borderColor: '#2ecc71',
            backgroundColor: 'rgba(46, 204, 113, 0.5)',
          },
        ],
      },
      throughput: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [
          {
            label: '$DAG Tokens',
            data: [200, 450, 300, 600, 500, 450],
            borderColor: '#9b59b6',
            backgroundColor: 'rgba(155, 89, 182, 0.5)',
          },
          {
            label: 'Data',
            data: [400, 300, 400, 300, 400, 300],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.5)',
          },
        ],
      },
    },
  });

  const copyTestingCode = useCallback(() => {
    navigator.clipboard.writeText(walletData.address).then(() => {
      toast.success("Address copied successfully!");
    }, (err) => {
      console.error("Unable to copy", err);
      toast.error("Failed to copy address.");
    });
  }, [walletData.address]);

  return (
    <div id="app" className="container wallet-container">
      <div className="row">
        <StatsCard title="DAG" iconClass="icon-success fas fa-wallet" value={`${walletData.tokenAmount} DAG`} footer={`Updates in ${walletData.counters.token} seconds`} />
        <StatsCard title={walletData.currency} iconClass="icon-danger fas fa-search-dollar" value={walletData.totalValue.toLocaleString()} footer={`Updates in ${walletData.counters.value} seconds`} />
        <StatsCard title="Blocks" iconClass="icon-info fas fa-cube" value={walletData.stat.blocks} footer={`Updates in ${walletData.counters.block} seconds`} />
      </div>
      
      <div className="row">
        <div className="col">
        <div className="card wallet-address">
            <span className="text-overflow">{walletData.address}</span>
            <button className="btn btn-info" onClick={copyTestingCode}>
              <i className="fa fa-copy"></i> COPY
            </button>
            <input type="hidden" id="testing-code" value={walletData.address} />
          </div>
        </div>
      </div>

      <div className="row">
        {/* {walletData.toggle.nodesOnline && <ChartCard title="Nodes Online" subTitle="Since last 24 hours" chartData={walletData.chart.nodesOnline} />} */}
        {walletData.toggle.transactions && <ChartCard title="Transactions" subTitle="Sent vs. received over the last year" chartData={walletData.chart.transactions} />}
        {walletData.toggle.throughput && <ChartCard title="Network Throughput (tps)" subTitle="24 Hours performance" chartData={walletData.chart.throughput} />}
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default WalletPage;
