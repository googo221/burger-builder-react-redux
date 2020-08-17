import React from 'react';

import styles from '../styles/components/Backdrop.module.css';

const backdrop = (props) => {
  const { show, clicked } = props;

  return show ? (
    <div className={styles.backdrop} onClick={clicked}></div>
  ) : null;
};

export default backdrop;
