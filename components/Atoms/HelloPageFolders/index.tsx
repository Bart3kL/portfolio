import React from "react";
import { Disclosure } from "@headlessui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";

import styles from "./rwd.module.scss";

export const HelloPageFolders = ({
  isOpen,
  setIsOpen,
  setSubmenuName,
  open,
  menu,
  subMenu,
  index,
}: any) => {
  return (
    <Disclosure.Button
      className={styles.wrapper}
      style={
        isOpen.i !== index && isOpen.open === true
          ? { pointerEvents: "none" }
          : {}
      }
      onClick={() => {
        setIsOpen({ i: index, open: !isOpen.open, menu: menu });
        setSubmenuName(subMenu[0].name);
      }}
    >
      <div className={styles.wrapperIcons}>
        <MdKeyboardArrowRight style={open ? { rotate: "90deg" } : {}} />
        <AiFillFolder />
      </div>
      <span className={styles.wrapperName}>{menu}</span>
    </Disclosure.Button>
  );
};

export default HelloPageFolders;
