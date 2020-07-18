import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
      || nextProps.children !== this.props.children;
  }

  render() {
    const visibiliy = this.props.show ? classes.Show : classes.Hide;
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.closeModal} />
        <div className={[classes.Modal, visibiliy].join(' ')}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
};

export default Modal;
