import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1f2937", // dark gray
          color: "white",
          paddingTop: 2,
        },
      }}
    >
      <Box sx={{ mb: 4, px: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Business Dashboard
        </Typography>
      </Box>

      <List>
        {["Dashboard", "Employees", "Inventory", "Sales", "Tickets"].map((text) => (
          <ListItemButton
            key={text}
            component={Link}
            to={`/${text.toLowerCase()}`}
            sx={{
              color: "white",
              "&.Mui-selected": {
                backgroundColor: "#2563eb",
              },
            }}
          >
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;