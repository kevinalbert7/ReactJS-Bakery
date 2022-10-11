import React, { Component } from 'react'

import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor () {
    super () 
    
    this.state = {
      activeTab: "Add",
      items: []
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.calculatedPrice = this.calculatedPrice.bind(this)
  }

  handleButtonClick(str) {
    this.setState({ activeTab: str })
  }

  addItem(name, price) {
    const newItems = {
      name: name,
      price: price
    }

    this.setState({items: [...this.state.items, newItems]})
  }

  handleDeleteItem(itemToBoDeleted) {
    const deletedItems = this.state.items.filter(item =>{
      return item !== itemToBoDeleted
    })

    this.setState({items: deletedItems})
  }

  calculatedPrice(price) {
    let total = 0
    this.state.items.forEach(item => {
      total = total += item.price
    })
  }
  
  render() {
    console.log("total =>", this.calculatedPrice())
    const { activeTab, items } = this.state

    return (
      <div className='container my-5'>
        <div className="row text-center">
          <h1>Bakery</h1>
        </div>

        <div className='mb-5'>
          <Button 
            value="Add" 
            handleClick={this.handleButtonClick} 
            isSelected={activeTab === "Add"}
          />
          <Button 
            value="List" 
            handleClick={this.handleButtonClick} 
            isSelected={activeTab === "List"}
          />
          <Button 
            value="Pay" 
            handleClick={this.handleButtonClick} 
            isSelected={activeTab === "Pay"}
            />
        </div>

        {activeTab === "Add" && <Add addItem={this.addItem}/>}
        {activeTab === "List" && <List items={items} handleClick={this.handleDeleteItem}/>}
        {activeTab === "Pay" && <Pay priceToPay={this.calculatedPrice}/>}
      </div>
    )
  }

}

export default App