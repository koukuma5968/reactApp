import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis, ResponsiveContainer } from "recharts";

export const Downchart = () => {
    const data = [
        {
            name: '1月', 計画: 100, 予定: 100, 実績: 100
        },
        {
            name: '2月', 計画: 80, 予定: 75, 実績: 100
        },
        {
            name: '3月', 計画: 60, 予定: 30, 実績: 100
        },
        {
            name: '4月', 計画: 40, 予定: 20, 実績: 100
        },
        {
            name: '5月', 計画: 20, 予定: 10, 実績: 100
        },
        {
            name: '6月', 計画: 0, 予定: 0, 実績: 100
        },
    ];
    return (  
        <ResponsiveContainer>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval="preserveStartEnd" />
                <YAxis interval="preserveStartEnd" />
                <Legend />
                <Line type="monotone" dataKey="計画" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="予定" stroke="#82ca9d" />
                <Line type="monotone" dataKey="実績" stroke="#55c000" />
            </LineChart>
        </ResponsiveContainer>
    )
}
  
export default Downchart