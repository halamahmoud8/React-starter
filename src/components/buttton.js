import React from "react";

 function Button (props) {

    const reset = () => props.reset
    return (
        <div className='btn' onClick={reset()}>
          <span>{props.label}</span>
        </div>
    );  
  }

export default Button;
