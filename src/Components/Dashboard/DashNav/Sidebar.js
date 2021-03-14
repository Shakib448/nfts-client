import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Sidebar = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <List component="nav" aria-label="Dashboard Navigation">
        <ListItem button component={NavLink} to="/collections">
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Connect Wallet" />
        </ListItem>
        <ListItem button>
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
    </motion.div>
  );
};

export default Sidebar;
