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
                <a href="http://">
                  Newer Things to Know About Good Ol’ HTML Lists
                </a>
              </li>
              <li>
                <a href="http://">More Than “Slapping Paint on a Website”</a>
              </li>
              <li>
                <a href="http://">CSS Grid and Custom Shapes, Part 3</a>
              </li>
            </ul>
          </div>
          <div className={styles.wrapperContentShortcutsBlock}>
            <h5 className={styles.wrapperContentShortcutsBlockName}>
              Top 3 projects
            </h5>
            <ul className={styles.wrapperContentShortcutsBlockList}>
              <li>
                <a href="http://">English Platform</a>
              </li>
              <li>
                <a href="http://">Blog</a>
              </li>
              <li>
                <a href="http://">Bank</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloPageStartContent;
