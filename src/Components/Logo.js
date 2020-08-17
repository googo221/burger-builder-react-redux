import React from 'react';

import styles from '../styles/components/Logo.module.css';
import burgerLogo from '../logo/burger-logo.png';

const logo = (props) => (
  <div className={styles.logo}>
    <img src={burgerLogo} alt="MyBurger" style={{ height: props.height }} />
  </div>
);

export default logo;
