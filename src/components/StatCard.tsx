import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
  title: string;
  value: number;
};

const StatCard = ({ title, value }: Props) => {
  return (
    <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>
      <Box mt={1}>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    </Paper>
  );
};

export default StatCard;