import React from 'react';
import clases from './Backdrop.css';

const backdrop = (props) => (
  props.show ? <div className={clases.Backdrop} onClick={props.clicked} /> : null
);

export default backdrop;
