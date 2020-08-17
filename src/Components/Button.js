import React from 'react';

import styles from '../styles/components/Button.module.css';

const button = (props) => {
  const { children, clicked, btnType, disabled } = props;

  return (
    <button
      disabled={disabled}
      className={[styles.button, styles[btnType]].join(' ')}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default button;
