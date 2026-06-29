import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { name: "Technical", score: 9 },
  { name: "SQL", score: 8 },
  { name: "Communication", score: 8 },
  { name: "Problem Solving", score: 9 }
];

function AnalyticsChart() {
  return (
    <div
      style={{
        width: "100%",
        height: "350px",
        background: "white",
        borderRadius: "20px",
        padding: "20px"
      }}
    >
      <h2 style={{ color: "black" }}>
        Interview Analytics
      </h2>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;