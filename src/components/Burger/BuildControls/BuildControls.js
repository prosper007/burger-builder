import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        addIngredientHandler={() => props.addIngredientHandler(control.type)}
        removeIngredientHandler={() => props.removeIngredientHandler(control.type)}
        disabledInfo={props.disabledInfo[control.type]}
      />
    ))}
    <button
      disabled={!props.purchasable}
      className={classes.OrderButton}
      onClick={props.ordering}>
      Place Order
    </button>
  </div>
);

export default buildControls