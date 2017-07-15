import { extendObservable, action } from 'mobx'

export class OptionsStore {
  constructor(props = {}) {
    extendObservable(this, {
      maxToppings: props.maxToppings || 3,
      setMaxToppings: action(mt => {
        this.maxToppings = mt
      })
    })
  }
}

let store
export function initOptions(spec = {}) {
  if (typeof window === 'undefined') {
    return new OptionsStore(spec)
  }
  if (!store) {
    store = new OptionsStore(spec)
  }
  return store
}