import React from 'react'
import Topping from './topping'

class ConfigView extends React.Component {
  constructor(props) {
    super(props)
    this.changeOptions = this.changeOptions.bind(this)
  }
  changeOptions(e) {
    console.log(e.target.checked)
  }
  render() {
    return (
      <div className="ConfigView">
        <h1>Configure</h1>
        <h2>Crust</h2>
        <h2>Sauce</h2>
        <h2>Toppings</h2>
        <form>
          <Topping onChange={this.changeOptions}>Chicken</Topping>
          <Topping onChange={this.changeOptions}>Steak</Topping>
          <Topping onChange={this.changeOptions}>Sausage</Topping>
          <Topping onChange={this.changeOptions}>Salami</Topping>
          <Topping onChange={this.changeOptions}>Pepperoni</Topping>
          <Topping onChange={this.changeOptions}>Ham</Topping>
          <Topping onChange={this.changeOptions}>Baccon</Topping>
        </form>
        <form>
          <Topping onChange={this.changeOptions}>Green Peppers</Topping>
          <Topping onChange={this.changeOptions}>Tomatoes</Topping>
          <Topping onChange={this.changeOptions}>Pineapple</Topping>
          <Topping onChange={this.changeOptions}>Jalapenos</Topping>
          <Topping onChange={this.changeOptions}>Onion</Topping>
          <Topping onChange={this.changeOptions}>Bananna Peppers</Topping>
        </form>
      </div>
    )
  }
}

export default ConfigView
