import React, { Component } from "react";

class Button extends Component {
  render() {
    const { handleClick, value, isSelected } = this.props;

    return (
      <button
        type="button"
        className={`${
          isSelected ? "me-3 btn btn-primary" : "me-3 btn btn-outline-primary"
        }`}
        onClick={() => handleClick(value)}
      >
        {value}
      </button>
    );
  }
}

export default Button;
