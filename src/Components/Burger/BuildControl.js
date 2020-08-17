import React from 'react';

import styles from '../../styles/components/BuildControl.module.css';

const buildControl = (props) => {
  const { label, removed, disabled, added } = props

  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button 
        className={styles.less} 
        onClick={removed} 
        disabled={disabled}>Less</button>
      <button 
        className={styles.more} 
        onClick={added}>More</button>
    </div>
  )};

export default buildControl;