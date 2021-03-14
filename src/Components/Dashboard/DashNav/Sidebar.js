import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  //   makeStyles,
} from "@material-ui/core";
// import clsx from "clsx";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//   dashNav: {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
// }));

const Sidebar = () => {
  //   const classes = useStyles();
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
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
  );
};

export default Sidebar;
