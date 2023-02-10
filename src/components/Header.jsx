import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import AppBar from "@mui/material/AppBar";
// import { Badge } from "@mui/icons-material";
import { Badge, Button } from "@mui/material";
import { Box } from "@mui/material";
import { IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          Shopkaro
        </Typography>
        <Box
          sx={{
            display: { md: "flex" },
          }}
        >
          <IconButton size="large" aria-label="shopping cart" color="inherit">
            <Badge badgeContent={1} color="error">
              <ShoppingCartSharpIcon />
            </Badge>
          </IconButton>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
