import React from "react";
import { motion } from "framer-motion";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./rwd.module.scss";

export const Layout = ({ children }: any) => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={styles.wrapper}
    >
      <Header />
      <main className={styles.wrapperMain}>{children}</main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
