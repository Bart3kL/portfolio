import React from "react";

import styles from "./rwd.module.scss";

const HelloPageStartContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNavPanel}>Get Started</div>
      <div className={styles.wrapperContent}>
        <h1 className={styles.wrapperContentHeader}>Bartosz Portfolio Code</h1>
        <p className={styles.wrapperContentSubtitle}>Preview Available</p>

        <div className={styles.wrapperContentShortcuts}>
          <h3 className={styles.wrapperContentShortcutsTitle}>Shortcuts</h3>
          <div className={styles.wrapperContentShortcutsBlock}>
            <h5 className={styles.wrapperContentShortcutsBlockName}>
              Top 3 posts on blog
            </h5>
            <ul className={styles.wrapperContentShortcutsBlockList}>
              <li>
                <a href="https://www.jestemprogramista.pl/blog/javascript-co-to-jest-i-dlaczego-warto-go-poznac">
                  JavaScript: Co to jest i dlaczego warto go poznać?
                </a>
              </li>
              <li>
                <a href="https://www.jestemprogramista.pl/blog/css-podstawy-skladni">
                  Selektory w css
                </a>
              </li>
              <li>
                <a href="https://www.jestemprogramista.pl/blog/jak-korzystac-z-gita">
                  Jak korzystać z gita
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.wrapperContentShortcutsBlock}>
            <h5 className={styles.wrapperContentShortcutsBlockName}>
              Top 2 projects
            </h5>
            <ul className={styles.wrapperContentShortcutsBlockList}>
              <li>
                <a href="https://polyglot-bart3kl.vercel.app/">
                  English Platform
                </a>
              </li>
              <li>
                <a href="https://www.jestemprogramista.pl/">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloPageStartContent;
