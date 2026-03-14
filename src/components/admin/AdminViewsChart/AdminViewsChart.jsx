import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./AdminViewsChart.css";

function AdminViewsChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="admin-chart-empty">
        <p>No view data available yet.</p>
      </div>
    );
  }

  const chartData = data.map((item) => ({
    name:
      item.title.length > 18
        ? `${item.title.slice(0, 18)}...`
        : item.title,
    views: item.views,
  }));

  return (
    <div className="admin-views-chart">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb"
            }}
          />
          <Bar dataKey="views" fill="#6366f1" radius={[8,8,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminViewsChart;