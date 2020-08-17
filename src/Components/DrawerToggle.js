import React from 'react';

import styles from '../styles/components/DrawerToggle.module.css';

const drawerToggle = (props) => {
  const { clicked } = props;

  return (
    <div className={styles.drawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
