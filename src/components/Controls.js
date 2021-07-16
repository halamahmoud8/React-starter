import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "./buttton";

 class Controls extends Component {
  
  render() {
    const { incrementLabel, decrementLabel, resetLabel, increment, decrement, reset } = this.props;
   
    return (
      <div className="controls">  
        <Button reset={() => {reset();}} label={resetLabel}/>
        <Button reset={() => {increment();}} label={incrementLabel}/>
        <Button reset={() => {decrement();}} label={decrementLabel}/>
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLabel: "reset"
};

export default Controls;
