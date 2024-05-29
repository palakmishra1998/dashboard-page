import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { date: '21 Jan', value: 100},
  { date: '22 Jan', value: 160 },
  { date: '23 Jan', value: 100 },
  { date: '24 Jan', value: 200 },
  { date: '25 Jan', value: 180 },
  { date: '26 Jan', value: 250 },
  { date: '27 Jan', value: 230 },
  { date: '28 Jan', value: 150 },
];

const Linegraph = () => {
  return (
    <div className="chart-container dash-card">
      <h3 className="chart-header">Network</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#002F6B" stopOpacity={1} />
              <stop offset="48.25%" stopColor="#002F6B" stopOpacity={1} />
              <stop offset="103.37%" stopColor="#002F6B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};



export default Linegraph;