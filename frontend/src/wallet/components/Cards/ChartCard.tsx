import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers all chart components
import Card from './Card'; // Make sure this path is correct

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
}

interface ChartCardProps {
  title?: string;
  subTitle?: string;
  chartData: ChartData;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subTitle,
  chartData,
}) => {
  return (
    <Card title={title} subTitle={subTitle}>
      <div className="card-content">
        <Line data={chartData} options={{ responsive: true }} />
      </div>
    </Card>
  );
};

export default ChartCard;
