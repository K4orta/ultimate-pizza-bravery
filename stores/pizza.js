import { extendObservable, action } from 'mobx'

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
  if (left === right) {
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
  constructor(spec) {
    extendObservable(this, {
      crust: undefined,
      toppings: []
    })
  }

  setCrust(crust) {
    this.crust = crust
  }

  addTopping(topping) {
    this.toppings.push(Object.assign({}, topping, defaultSides(topping.left, topping.right)))
  }
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