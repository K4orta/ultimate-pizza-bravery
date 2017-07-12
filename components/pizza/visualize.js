import React from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import crustStyles from './crusts.styled.js'
import sauceStyles from './sauces.styled.js'
import toppingStyles from './toppings.styled.js'

function toppingSide(t) {
  if (t.left === 0 && t.right === 0) {
    return 'Topping--none';
  }

  if (t.left === 0) {
    return 'Topping--right'
  }

  if (t.right === 0) {
    return 'Topping--left'
  }

  return ''
}

function sauceAmount(t) {
  if (t.left === 0) {
    return 'Sauce--none'
  }
  return ''
}

const VisualizePizza = ({ pizza }) => {
  const sauce = pizza.toppings.find(t => t.tags.Sauce)
  const toppings = pizza.toppings
    .filter(t => t.tags && !t.tags.Sauce)
    .map(t =>
      <div
        key={t.code}
        className={`Topping ${toppingSide(t)} Topping--${pizza.crust.sizeCode} Topping--${t.code}`}
      >
      <style jsx>{toppingStyles}</style>
      </div>
      )
  
  let sauceEl
  if (sauce) {
    sauceEl = (<div className={`Sauce Sauce--${sauce.code} ${sauceAmount(sauce)}`} >
      <style jsx>{sauceStyles}</style>
    </div>)
  }
  return (
    <div className="PizzaVis">
      <div className="Pizza__container">
        <div className={`Crust Crust--${pizza.crust.sizeCode} Crust--${pizza.crust.flavorCode}`} >
          {sauceEl}
        </div>
        <div className={`Toppings`}>
          {toppings}
        </div>
      </div>
      <style jsx>{`
          .PizzaVis {
            perspective: 500px;
            position: relative
          }

          .Pizza__container {
            transform: rotateX(70deg);
          }
        `}</style>
        <style jsx>{crustStyles}</style>
    </div>
  )
}

export default inject('pizza')(observer(VisualizePizza))