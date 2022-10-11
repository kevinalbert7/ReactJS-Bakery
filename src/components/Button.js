import React, { Component } from 'react'

class Button extends Component {
    render() {
        const { handleClick, name, isSelected } = this.props
        console.log("props du bouton =>", this.props)

        return (
            <button 
                type="button" 
                className={`${isSelected ? 'me-3 btn btn-primary': 'me-3 btn btn-outline-primary'}`} 
                onClick={() => handleClick(name)}
            >
                {name}
            </button>       
        )
    }
}

export default Button