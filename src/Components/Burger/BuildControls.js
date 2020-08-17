import React from 'react';
import BuildControl from './BuildControl';

import styles from '../../styles/components/BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
  const {
    disabled,
    ingredientAdded,
    ingredientRemoved,
    isAuth,
    ordered,
    purchasable,
  } = props;

  return (
    <div className={styles.buildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong> $
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button
        className={styles.orderButton}
        disabled={!purchasable}
        onClick={ordered}
      >
        {isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
      </button>
    </div>
  );
};

export default buildControls;
