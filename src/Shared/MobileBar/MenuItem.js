import * as React from "react";
import { motion } from "framer-motion";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: 20,
  },
}));

export const MenuItem = ({ item }) => {
  const classes = useStyles();
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button className={classes.menuButton} component={Link} to={item.to}>
          {item.route}
        </Button>
      </motion.li>
    </>
  );
};
