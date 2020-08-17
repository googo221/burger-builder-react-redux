import React from 'react';
import BurgerIngredient from './BurgerIngredient';

import styles from '../../styles/components/Burger.module.css';

const burger = (props) => {
  const { ingredients } = props;

  const transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length > 0 ? (
        transformedIngredients
      ) : (
        <p>Please start adding ingredients!</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
