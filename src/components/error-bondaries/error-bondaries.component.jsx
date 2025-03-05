import React, { Component } from "react";

import './error-bondaries.styles.scss';

class ErrorBondaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true 
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Errore Di Sistema!</h1>;
    }

    return this.props.children;
      
    
  }
}

export default ErrorBondaries;
