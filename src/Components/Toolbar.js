import React from 'react';

import styles from '../styles/components/Toolbar.module.css';

import DrawerToggle from './DrawerToggle';
import Logo from './Logo';
import NavigationItems from './NavigationItems';

const toolbar = (props) => {
  const { drawerToggleClicked, isAuth } = props;

  return (
    <header className={styles.toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.desktopOnly}>
        <NavigationItems isAuthenticated={isAuth} />
      </nav>
    </header>
  );
};

export default toolbar;
