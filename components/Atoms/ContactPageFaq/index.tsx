import React from "react";
import { Disclosure } from "@headlessui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

import styles from "./styles.module.scss";

const faq = [
  {
    question: "How long will you wait for my answer?",
    answer: "I usually reply within a few hours",
  },
  {
    question: "How long will you wait for my answer?",
    answer: "I usually reply within a few hours",
  },
  {
    question: "How long will you wait for my answer?",
    answer: "I usually reply within a few hours",
  },
];

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
