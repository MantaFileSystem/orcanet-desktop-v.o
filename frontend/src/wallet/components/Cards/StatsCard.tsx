import React, { FC, ReactNode } from 'react';
import Card from './Card'; // Make sure this path is correct

interface StatsCardProps {
  title?: string;
  iconClass?: string;
  value?: string | number;
  footer?: string;
}

const StatsCard: FC<StatsCardProps> = ({ title, iconClass, value, footer }) => {
  return (
    <Card>
      <div className="card-header">
        {iconClass && <i className={iconClass}></i>} {title}
      </div>
      <div className="card-body">
        {value}
      </div>
      <div className="card-footer">
        {footer}
      </div>
    </Card>
  );
};

export default StatsCard;
