import React from 'react';
import classes from './CheckoutSummary.css'
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you like it!</h1>
      <div className={classes.Burger}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger">
        Cancel
      </Button>
      <Button btnType="Success">
        Continue
      </Button>
    </div>
  );
}

export default checkoutSummary;