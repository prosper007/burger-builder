import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removeIngredientHandler}
      disabled={props.disabledInfo}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.addIngredientHandler}>More</button>
  </div>
)

export default buildControl;