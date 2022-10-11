import React, { Component } from 'react'




class Add extends Component {

    constructor () {
        super () 
        
        this.state = {
            name: "",
            price: 0
        }
        
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)

    }

    handleNameChange(e) {
        this.setState({ name: e.target.value})
    }
    
    handlePriceChange(e) {
        this.setState({ price: e.target.value})
    }
    
    render() {
        const { addItem, calculatePrice } = this.props
        const { price, name } = this.state
        // console.log("props", this.props)

        return (
            <div>
                <h2>Add</h2>
                <div className='d-flex col-6 flex-column mb-3'>
                    <label className='form-label'>Name</label>
                    <input 
                        className='form-control mb-4' 
                        type="text" 
                        onChange={this.handleNameChange} 
                        value={name}
                    />
                    
                    <label className='form-label'>Price {price}</label>
                    <br />
                    <input 
                        className='mb-4' 
                        type="range" 
                        min="1" 
                        max="10"
                        onChange={this.handlePriceChange} 
                        value={price}
                    />

                    <button 
                        type='button'
                        className='btn btn-outline-primary'
                        onClick={() => {addItem(name, price), calculatePrice}}>Ajouter</button>

                </div>
            </div>
        )
    }
}

export default Add