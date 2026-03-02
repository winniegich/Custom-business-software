import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Business Management System
        </Typography>
        <Box>
          <Typography variant="body2" color="textSecondary">
            Admin
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;