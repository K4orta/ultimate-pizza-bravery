import React from 'react'
import { observer, inject } from 'mobx-react'

function sauceAmt(amt, name) {
  switch(amt) {
  case 0:
    return 'No sauce'
  case .5:
    return `Light ${name}`
  case 1:
    return name
  case 1.5:
    return `Extra ${name}`
  case 2:
    return `Double ${name}`
  }
}

function toppingSide(topping) {
  if (topping.left === 0 && topping.right === 0) {
    return `No ${topping.name}`
  }

  if (topping.left === topping.right) {
    return sauceAmt(topping.left ,topping.name)
  }

  if (topping.left > 0 && topping.right > 0) {
    return `${sauceAmt(topping.left ,topping.name)} on the left, ${sauceAmt(topping.right ,topping.name)} on the right`
  }

  if (topping.left == 0) {
    return `${sauceAmt(topping.right ,topping.name)} on the right`
  }

  if (topping.right == 0) {
    return `${sauceAmt(topping.left, topping.name)} on the left`
  }

  return topping.name
}

const Item = ({children}) => (
  <div className="Describe__item">
    {children}
    <style jsx>{`
      .Describe__item {
        padding: .2rem 0;
      }
    `}</style>
  </div>
)

class Describe extends React.Component {
  render() {
    const { pizza } = this.props
    const toppings = pizza.toppings.filter(t => !t.tags.Sauce).map(t => (
      <Item key={t.code}>
        {toppingSide(t)}
      </Item>
    ))
    const sauce = pizza.toppings.find(t => t.tags.Sauce)
    let sauceEl
    if (sauce) {
      sauceEl = <Item>
        {sauceAmt(sauce.left, sauce.name)}
      </Item>
    }
    return (
      <div className="Describe">
        <Item>
          {pizza.crust.name}
        </Item>
        {sauceEl}
        {toppings}
        <style jsx>{`
          .Describe {
            margin-bottom: 2rem;
            padding: 0 1rem;
            text-align: left;
          }
        `}</style>
      </div>
    )
  }
}

export default inject('pizza')(observer(Describe))
