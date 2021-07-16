import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

 class Counter extends Component {
  render() {

    const { count } = this.props;

    return (
      <div className="counter">
        {count >= 1 ? <div className="count red">{count}</div> : count === 0? <div className="count">{count}</div> : <div className="count green">{count}</div>   }
        
        <Controls />
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;
