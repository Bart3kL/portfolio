import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { clsx } from "clsx";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiX } from "react-icons/bi";

import HomePageMobileNav from "@/components/Atoms/HomePageMobileNav";
import HomePageDesktopNav from "@/components/Atoms/HomePageDesktopNav";

import styles from "./rwd.module.scss";

export const Header = () => {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const activePage = (url: string, pathname: string) =>
    pathname === url ? styles.wrapperActivePage : "";

  return (
    <nav className={styles.wrapper}>
      <Link
        href="/"
        className={clsx(activePage("/", router.pathname), styles.wrapperName)}
      >
        _bartosz-lewandowski
      </Link>
      <button
        className={styles.wrapperIcon}
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        {showMobileNav ? <BiX /> : <HiOutlineBars3 />}
      </button>
      {showMobileNav && <HomePageMobileNav activePage={activePage} />}
      <HomePageDesktopNav activePage={activePage} />
    </nav>
  );
};

export default Header;
