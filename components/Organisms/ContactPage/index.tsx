import React from 'react';
import ContactPageLeftPanel from '../../Atoms/ContactPageLeftPanel';
import ContactPageWrapper from '../../Molecules/ContactPageWrapper';

import styles from './styles.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <ContactPageLeftPanel />
      <ContactPageWrapper />
    </div>
  );
};

export default ContactPage;
