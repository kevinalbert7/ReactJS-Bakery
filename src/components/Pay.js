import React, { Component } from 'react'

class Pay extends Component {
    render() {
        const { priceToPay } = this.props
        return (
            <>
                <h2>Pay</h2>
                <p>{priceToPay}</p>
            </>
        )
    }
}

export default Pay