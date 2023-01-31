import React from "react";
import Link from "next/link";

import { FaFacebookF, FaInstagramSquare, FaGithub } from "react-icons/fa";

import styles from "./rwd.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.wrapperBlock}>find me in:</div>
      <Link
        href="https://www.facebook.com/bartosz.lewandowski.1257/"
        className={styles.wrapperBlock}
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://www.instagram.com/leewandowski_b/"
        className={styles.wrapperBlock}
      >
        <FaInstagramSquare />
      </Link>
      <Link href="https://github.com/Bart3kL" className={styles.wrapperBlock}>
        <p className={styles.wrapperBlockGithub}>@Bart3kL</p> <FaGithub />
      </Link>
    </footer>
  );
};

export default Footer;
