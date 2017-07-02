import crustData from '../data/crusts'
import sizes from '../data/sizes'
import toppingData from '../data/toppings'
import { Pizza } from '../stores/pizza'

function randFromArray(arr, filter) {
  let filtered = arr
  if (filter !== undefined) {
    filtered = arr.filter(x => x.code.indexOf(filter) !== -1)
  }
  return filtered[Math.floor(Math.random() * filtered.length)]
}

const toppings = toppingData
  .filter(top => !top.tags['Sauce'] && !top.tags['Cheese'])

const sauces = toppingData
  .filter(top => top.tags['Sauce'])

const defaultOptions = {
  size: undefined,
  maxToppings: 3,
  crusts: crustData,
  sauces,
  toppings,
  overrides: []
}

export default function generatePizza(spec = {}, pizza) {
  const opts = Object.assign({}, defaultOptions, spec)
  const code = randFromArray(opts.crusts, opts.size)
  const p = pizza || new Pizza()
  p.setCrust(code)
  
  // Add the cheese
  p.addTopping({
    code: 'C',
    name: 'Cheese'
  })

  // Add sauce
  p.addTopping(randFromArray(opts.sauces))
  
  // Add optional toppings
  for (let i = 0; i < opts.maxToppings; i += 1) {
    p.addTopping(randFromArray(opts.toppings))
  }

  return p
}