import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul className="mobileBar__ul" variants={variants}>
    {routesName.map((item, i) => (
      <MenuItem item={item} key={i} />
    ))}
  </motion.ul>
);

const routesName = [
  { route: "Home", to: "/" },
  { route: "About" },
  { route: "Contact" },
  { route: "Login", to: "/login" },
  { route: "Signup", to: "/sign-up" },
];
