import { Paper, Typography, Box } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import StatCard from "../components/StatCard";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
];

const Dashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Flexbox for stat cards */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={3} // spacing between items
        mb={5}
      >
        <Box flex="1 1 200px">
          <StatCard title="Employees" value={12} />
        </Box>
        <Box flex="1 1 200px">
          <StatCard title="Products" value={45} />
        </Box>
        <Box flex="1 1 200px">
          <StatCard title="Sales" value={120} />
        </Box>
        <Box flex="1 1 200px">
          <StatCard title="Tickets" value={8} />
        </Box>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sales Overview
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default Dashboard;