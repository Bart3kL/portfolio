import React from "react";
import { Disclosure } from "@headlessui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { faq } from "./untils";

import styles from "./rwd.module.scss";

const ContactPageFaq = () => {
  return (
    <div className={styles.wrapper}>
      {faq.map(({ question, answer }, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button className={styles.wrapperBtn}>
                {question}
                <MdKeyboardArrowRight
                  style={open ? { rotate: "90deg" } : {}}
                  className={styles.wrapperBtnArrow}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={styles.wrapperContent}>
                {answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default ContactPageFaq;
