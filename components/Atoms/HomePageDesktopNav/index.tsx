import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

import { navigation } from "./untils";
import { NavProps } from "@/types/HomePageMobileNav/types";

import styles from "./rwd.module.scss";

export const HomePageDesktopNav = ({ activePage }: NavProps) => {
  const router = useRouter();
  return (
    <ul className={styles.wrapper}>
      {navigation.map(({ name, href }) => (
        <li
          className={clsx(styles.wrapperNav, activePage(href, router.pathname))}
          key={name}
        >
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePageDesktopNav;
