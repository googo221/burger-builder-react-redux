import React from 'react';

import styles from '../styles/components/SideDrawer.module.css';

import Aux from '../hoc/Aux';
import Backdrop from './Backdrop';
import Logo from './Logo';
import NavigationItems from './NavigationItems';

const sideDrawer = (props) => {
  const { open, closed, isAuth } = props;

  let attachedCLasses = [styles.sideDrawer, styles.close];
  if (open) {
    attachedCLasses = [styles.sideDrawer, styles.open];
  }

  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedCLasses.join(' ')} onClick={closed}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
