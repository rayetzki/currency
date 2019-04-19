import React, { PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { chartObject } from '../chart.js'

export default class Chart extends PureComponent {
  render() {
    return (
      <LineChart
        width={1200}
        height={500}
        data={chartObject}
        margin={{
          top: 5, right: 30, left: 120, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="buy" stroke="#8884d8" activeDot={{ r: 12 }} />
        <Line yAxisId="right" type="monotone" dataKey="sell" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
