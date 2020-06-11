import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  const visibiliy = props.show ? classes.Show : classes.Hide;
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div className={[classes.Modal, visibiliy].join(' ')}>
        {props.children}
      </div>
    </Aux>
  )
};

export default modal;
