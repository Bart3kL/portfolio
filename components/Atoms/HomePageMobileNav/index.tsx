import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { navigation } from "./untils";

import styles from "./rwd.module.scss";

export const HomePageMobileNav = ({ activePage }: any) => {
  const router = useRouter();
  return (
    <ul className={styles.wrapper}>
      {navigation.map(({ name, href }) => (
        <li className={styles.wrapperNav} key={name}>
          <Link href={href} className={activePage({ href }, router.pathname)}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePageMobileNav;
