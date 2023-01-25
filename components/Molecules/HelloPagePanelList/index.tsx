import React, { useState } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { MdClose } from "react-icons/md";

import useTapsFolders from "@/components/Hooks/useTapsFolders";
import HelloPageFolders from "../../Atoms/HelloPageFolders";
import HelloPageFile from "../../Atoms/HelloPageFile";
import HelloPageFileContent from "../../Atoms/HelloPageFileContent";
import HelloPageStartContent from "../../Atoms/HelloPageStartContent";
import { details } from "./untils";

import styles from "./rwd.module.scss";

const HelloPagePanelList = () => {
  const { isOpen, setIsOpen, submenuName, setSubmenuName } = useTapsFolders();

  return (
    <div className={styles.wrapper}>
      {isOpen.open === false && <HelloPageStartContent />}
      {details.map(({ menu, subMenu }, i) => (
        <Disclosure key={menu}>
          {({ open, close }) => (
            <>
              <HelloPageFolders
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setSubmenuName={setSubmenuName}
                open={open}
                menu={menu}
                subMenu={subMenu}
                index={i}
              />
              <Disclosure.Panel>
                <Tab.Group>
                  {subMenu.map(({ name }) => (
                    <HelloPageFile
                      setSubmenuName={setSubmenuName}
                      name={name}
                      key={name}
                    />
                  ))}
                  <div className={styles.wrapperMenuName}>
                    <p>{submenuName}</p>
                    <MdClose
                      onClick={() => {
                        close(), setIsOpen({ i: 0, open: false, menu: "" });
                      }}
                    />
                  </div>
                  {subMenu.map(({ content, name }) => (
                    <HelloPageFileContent
                      content={content}
                      key={name}
                      menu={menu}
                      fileName={name}
                    />
                  ))}
                </Tab.Group>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default HelloPagePanelList;
