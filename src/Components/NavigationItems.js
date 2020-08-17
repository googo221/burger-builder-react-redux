import React from 'react';

import styles from '../styles/components/NavigationItems.module.css';
import NavigationItem from './NavigationItem';

const navigationItems = (props) => {
  const { isAuthenticated } = props;

  return (
    <ul className={styles.navigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {isAuthenticated ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {!isAuthenticated ? (
        <NavigationItem link="/auth">Authanticate</NavigationItem>
      ) : (
        <NavigationItem link="/logout">Logout</NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
