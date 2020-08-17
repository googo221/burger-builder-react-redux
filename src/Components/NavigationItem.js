import React from 'react';

import styles from '../styles/components/NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
  const { children, link, exact } = props;

  return (
    <li className={styles.navigationItem}>
      <NavLink to={link} exact={exact} activeClassName={styles.active}>
        {children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
