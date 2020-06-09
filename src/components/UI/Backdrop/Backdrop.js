import React from 'react';
import clases from './Backdrop.css';

const backdrop = (props) => (
  props.show ? <div className={clases.Backdrop} onClick={props.closeModal} /> : null
);

export default backdrop;
