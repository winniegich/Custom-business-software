import { Box, Typography, Paper } from "@mui/material";

const Sales = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Sales
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography variant="body1" color="textSecondary">
          Sales tracking module coming soon.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Sales;