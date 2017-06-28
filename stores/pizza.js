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

  addTopping({ code, left, right}) {
    const encodedSide = sideCode(left, right)
    this.toppings.push({
      code: code,
      side: encodedSide,
    })
  }
}
