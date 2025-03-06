"use client";
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend,
} from "recharts";

const data = [
    { date: "Feb 5", completion: 40 },
    { date: "Feb 6", completion: 70 },
    { date: "Feb 7", completion: 110 },
    { date: "Feb 8", completion: 150 },
    { date: "Feb 9", completion: 90 },
    { date: "Feb 10", completion: 60 },
    { date: "Feb 11", completion: 130 },
    { date: "Feb 12", completion: 170 },
    { date: "Feb 13", completion: 45 },
    { date: "Feb 14", completion: 85 },
    { date: "Feb 15", completion: 120 },
    { date: "Feb 16", completion: 200 },
    { date: "Feb 17", completion: 95 },
    { date: "Feb 18", completion: 75 },
    { date: "Feb 19", completion: 135 },
    { date: "Feb 20", completion: 180 },
    { date: "Feb 21", completion: 50 },
    { date: "Feb 22", completion: 100 },
    { date: "Feb 23", completion: 140 },
    { date: "Feb 24", completion: 190 },
    { date: "Feb 25", completion: 65 },
    { date: "Feb 26", completion: 110 },
    { date: "Feb 27", completion: 155 },
    { date: "Feb 28", completion: 175 },
    { date: "Feb 29", completion: 80 },
    { date: "Mar 1", completion: 90 },
    { date: "Mar 2", completion: 105 },
    { date: "Mar 3", completion: 195 },
];


const getBarColor = (completion) => {
    if (completion < 50) return "#FF4D4D"; // Red
    if (completion >= 50 && completion < 100) return "#FFA500"; // Orange
    return "#006308"; // Green
};

function Graph() {
    return (
        <div className="mt-[100px] w-[full]">
            {/* Line Chart */}
            {/* <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 200]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="completion" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer> */}

            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 200]} />
                    <Tooltip />
                    <Legend payload={[
                        { value: "< 50%", type: "rect", color: "#FF4D4D" },
                        { value: "50-100%", type: "rect", color: "#FFA500" },
                        { value: ">100%", type: "rect", color: "#006308" },
                    ]} />
                    <Bar
                        dataKey="completion"
                        barSize={20}
                        fill="#ccc"
                        shape={(props) => {
                            const { fill, x, y, width, height, payload } = props;
                            return (
                                <rect
                                    x={x}
                                    y={y}
                                    width={width}
                                    height={height}
                                    fill={getBarColor(payload.completion)}
                                />
                            );
                        }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Graph;
