import React from 'react';

import styles from '../styles/components/Input.module.css';

const input = (props) => {
  const {
    label,
    elementType,
    elementConfig,
    value,
    changed,
    invalid,
    shouldValidate,
    touched,
  } = props;

  let inputElement = null;
  let validationError = null;
  const inputStyles = [styles.inputElement];

  if (invalid && shouldValidate && touched) {
    inputStyles.push(styles.invalid);
    validationError = (
      <p className={styles.validationError}>Please enter a valid value</p>
    );
  }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputStyles.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputStyles.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputStyles.join(' ')}
          value={value}
          onChange={changed}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputStyles.join(' ')}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
  }

  return (
    <div className={styles.input}>
      <label className={styles.label}>{label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
