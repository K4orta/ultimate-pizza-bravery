import crustData from '../data/crusts'
import toppingData from '../data/toppings'
import camelCaseKeys from 'camelcase-keys'
import { Pizza } from '../stores/pizza'

function randFromArray(arr, filter) {
  let filtered = arr
  if (filter !== undefined) {
    filtered = arr.filter(x => x.code.indexOf(filter) !== -1)
  }
  const index = Math.floor(Math.random() * filtered.length)
  return [filtered[index], index]
}

const toppings = toppingData
  .map(camelCaseKeys)
  .filter(top => !top.tags['Sauce'] && !top.tags['Cheese'])

const sauces = toppingData
  .map(camelCaseKeys)
  .filter(top => top.tags['Sauce'])

const defaultOptions = {
  size: undefined,
  maxToppings: 3,
  crusts: crustData.map(camelCaseKeys),
  sauces,
  toppings,
  overrides: []
}

const amounts = [0, 0.5, 1, 1, 1.5, 2]
const toppingSides = [
  {left: 1, right: 0},
  {left: 0, right: 1},
  {left: 1, right: 1},
  {left: 1, right: 1}
]

export default function generatePizza(spec = {}, pizza) {
  const opts = Object.assign({}, defaultOptions, spec)
  const [ code ] = randFromArray(opts.crusts, opts.size)
  const p = pizza || new Pizza()
  p.setCrust(code)
  
  p.toppings = []

  // Add sauce
  const [ sauce ] = randFromArray(opts.sauces)
  const [ sauceAmount ] = randFromArray(amounts)
  p.addTopping(Object.assign({}, sauce, {
    left: sauceAmount,
    right: sauceAmount
  }))

  // Add the cheese
  p.addTopping({
    code: 'C',
    name: 'Cheese',
    tags: { Cheese: true },
    left: randFromArray(amounts)[0],
    right: randFromArray(amounts)[0]
  })
  
  // Add optional toppings
  let toppingsOpts = opts.toppings.slice()
  for (let i = 0; i < opts.maxToppings; i += 1) {
    const [topping, index] = randFromArray(toppingsOpts)
    p.addTopping(Object.assign(
      {},
      topping,
      randFromArray(toppingSides)[0]
    ))
    toppingsOpts.splice(index, 1)
  }

  return p
}