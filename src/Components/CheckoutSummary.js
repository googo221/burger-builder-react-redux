import React from 'react';

import Burger from './Burger/Burger';
import Button from './Button';
import styles from '../styles/components/CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  const { ingredients, checkoutCancelled, checkoutContinued } = props;

  return (
    <div className={styles.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="danger" clicked={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
