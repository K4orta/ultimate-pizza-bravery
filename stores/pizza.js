import { extendObservable } from 'mobx'

export class Pizza {
  constructor(spec) {
    extendObservable(this, {
      crust: undefined,
      toppings: []
    })
  }
}
