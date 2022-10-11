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
  }

  handleButtonClick(str) {
    this.setState({ activeTab: str })
  }
    
  render() {
    // const activeTab = this.state
    console.log("activeTab =>", this.state.activeTab)

    return (
      <div className='container my-5'>
        <div className="row text-center">
          <h1>Bakery</h1>
        </div>
        <Button 
          name="Add" 
          handleClick={this.handleButtonClick} 
          isSelected={this.state.activeTab === "Add"}
        />
        <Button 
          name="List" 
          handleClick={this.handleButtonClick} 
          isSelected={this.state.activeTab === "List"}
        />
        <Button 
          name="Pay" 
          handleClick={this.handleButtonClick} 
          isSelected={this.state.activeTab === "Pay"}
        />
      </div>
    )
  }

}

export default App