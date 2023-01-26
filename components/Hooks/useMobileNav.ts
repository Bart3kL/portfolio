import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "../Layout/Header/rwd.module.scss";

const useMobileNav = () => {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const activePage = (url: string, pathname: string) =>
    pathname === url ? styles.wrapperActivePage : "";

  return { activePage, router, showMobileNav, setShowMobileNav };
};

export default useMobileNav;
