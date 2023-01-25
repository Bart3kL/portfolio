import React from "react";
import Link from "next/link";

import styles from "./rwd.module.scss";

export const HomePageDescription = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.wrapperText}>
        // I am very pleased to host you on my site
      </p>
      <p className={styles.wrapperText}>
        // I hope it's not a waste of time for you :)
      </p>
      <div className={styles.wrapperGitHub}>
        <span className={styles.wrapperGitHubVariable}>const</span>
        githubLink =
        <Link
          href="https://github.com/Bart3kL"
          className={styles.wrapperGitHubLink}
        >
          "https://github.com/Bart3kL"
        </Link>
      </div>
    </div>
  );
};

export default HomePageDescription;
