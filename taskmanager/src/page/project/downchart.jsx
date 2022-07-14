import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis, ResponsiveContainer } from "recharts";

class Downchart extends React.Component  {

    constructor(props){
        super(props);
        console.log('Downchart')
        console.log(props)
        this.state = {
            dcList: props.dcList,
        }
    }

    render() {
        return (
            <ResponsiveContainer>
                <LineChart data={this.state.dcList}>
                    <CartesianGrid strokeDasharray="3 4" />
                    <XAxis dataKey="day" interval="preserveStartEnd" />
                    <YAxis interval="preserveStartEnd" />
                    <Legend />
                    <Line type="monotone" dataKey="taskSum" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="expectedNum" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="resultNum" stroke="#e2041b" />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}
export default Downchart