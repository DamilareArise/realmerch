import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Profit: 100000, Loss: 80000 },
  { name: "Feb", Profit: 90000, Loss: 70000 },
  { name: "Mar", Profit: 80000, Loss: 20000 },
  { name: "Apr", Profit: 70000, Loss: 90000 },
  { name: "May", Profit: 60000, Loss: 50000 },
  { name: "Jun", Profit: 40000, Loss: 30000 },
  { name: "Jul", Profit: 50000, Loss: 40000 },
  { name: "Aug", Profit: 80000, Loss: 60000 },
  { name: "Sep", Profit: 70000, Loss: 50000 },
  { name: "Oct", Profit: 70000, Loss: 60000 },
  { name: "Nov", Profit: 80000, Loss: 70000 },
  { name: "Dec", Profit: 90000, Loss: 80000 },
];

const SalesChart = () => {
  return (
    <div
      style={{ width: "100%", height: "500px" }}
      className="bg-white rounded-[14px] px-[14px] md:px-[24px] py-[16px] shadow-xl shadow-[#0000001A]"
    >
      <h2 className="text-[#292929] text-[18px] md:text-[30px] font-[700]">Sales Details</h2>
      <div className="flex /flex-col gap-[8px] /justify-center">
        <h1 className="text-[#292929] font-[700] text-[14px] md:text-[24px]">$10,000</h1>
        <span className="text-[#4CE13F] flex items-center gap-[8px]">
          <i className="fa-solid fa-arrow-trend-up"></i>
          <p className="text-[14px] md:text-[24px]">5.5% than last month</p>
        </span>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: "10px", fontWeight: "500" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: "10px", fontWeight: "500" }}
            tickLine={false}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="Profit" fill="#845649" />
          <Bar dataKey="Loss" fill="#D3D3D3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
