import React from 'react'
import { inject, observer } from 'mobx-react'
const PizzaDisplay = ({pizza}) => {
  const crustName = pizza.crust ? pizza.crust.name : 'None'
  const toppings = pizza.toppings.map((t) => (
    <div key={t.code}>{t.name}: {t.left} : {t.right}</div>
  ))

  return (
    <div>
      {crustName}
      {toppings}
    </div>
  )
}

export default inject('pizza')(observer(PizzaDisplay))