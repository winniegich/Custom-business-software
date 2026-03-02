import { Box, Typography, Paper } from "@mui/material";

const Tickets = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Support Tickets
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography variant="body1" color="textSecondary">
          Ticket management module coming soon.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Tickets;