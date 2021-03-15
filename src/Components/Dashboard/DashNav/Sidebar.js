import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
};

const Sidebar = () => {
  return (
    <Grid
      component={motion.div}
      Grid
      item
      md={3}
      lg={3}
      sm={12}
      variants={containerVariants}
      animate="visible"
    >
      <List component="nav" aria-label="Dashboard Navigation">
        <ListItem button component={NavLink} to="/connect-wallet">
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Connect Wallet" />
        </ListItem>
        <ListItem button component={NavLink} to="/collections">
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Collections" />
        </ListItem>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Featured" />
        </ListItem>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Grid>
  );
};

export default Sidebar;
