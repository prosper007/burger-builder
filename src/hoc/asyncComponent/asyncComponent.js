import React, { Component } from 'react';
const asynComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    }

    componentDidMount() {
      importComponent()
        .then(dynamicComponent => {
          this.setState({ component: dynamicComponent.default });
        });
    }

    render() {
      const DynamicComponent = this.state.component;
      return DynamicComponent ? <DynamicComponent {...this.props} /> : null;
    }
  }
};

export default asynComponent;