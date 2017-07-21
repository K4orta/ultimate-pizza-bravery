import { extendObservable, action } from 'mobx'
import { PropTypes } from 'mobx-react'

function sideCode(left, right) {
  if (left === right) {
    return { '1/1': left ? left : '1' }
  }

  const enc = {}
  if (left) {
    enc['1/2'] = left
  }

  if (right) {
    enc['2/2'] = right
  }
  return enc
}

function defaultSides(left, right) {
  if (left === right && left === undefined) {
    return { left: 1, right: 1 }
  }

  const enc = {}
  if (left) {
    enc['left'] = left
  }

  if (right) {
    enc['right'] = right
  }
  return enc
}

export class Pizza {
  constructor(spec = {}) {
    extendObservable(this, {
      crust: spec.crust || undefined,
      toppings: spec.toppings || [],
      setCrust: action((crust) => {
        this.crust = crust
      }),
      addTopping: action((topping) => {
        this.toppings.push(Object.assign({tags: {}}, topping, defaultSides(topping.left, topping.right)))
      }),
      popTopping: action(() => this.toppings.pop()),
      reset: action(() => {
        this.toppings = []
        this.crust = undefined
      }),
      get toppingsOnly () {
        return this.toppings.filter(t => !t.tags.Cheese && !t.tags.Sauce)
      }
    })
  }
}

Pizza.propTypes = {
  crust: PropTypes.ObservableObject,
  toppings: PropTypes.ObservableArray,
}

let store
export function initPizza(spec = {}) {
  if (typeof window === 'undefined') {
    return new Pizza(spec)
  }
  if (!store) {
    store = new Pizza(spec)
  }
  return store
}