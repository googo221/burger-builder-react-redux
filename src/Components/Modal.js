import React from 'react';

import styles from '../styles/components/Modal.module.css';
import Aux from '../hoc/Aux';
import Backdrop from './Backdrop';

const modal = (props) => {
  const { children, show, modalClosed } = props;

  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={styles.modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </Aux>
  );
};

export default modal;
