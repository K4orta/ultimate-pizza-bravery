import crusts from '../data/crusts'
import sizes from '../data/sizes'
import toppingData from '../data/toppings'
import { Pizza } from '../stores/pizza'

function randFromArray(arr, filter) {
  let filtered = arr
  if (filter !== undefined) {
    filtered = arr.filter(x => x.includes(filter))
  }
  return filtered[Math.floor(Math.random() * filtered.length)]
}

const toppings = toppingData
  .filter(top => !top.tags['Sauce'] && !top.tags['Cheese'])
  .map(top => top.code)

const sauces = toppingData
  .filter(top => top.tags['Sauce'])
  .map(sauce => sauce.code)
const defaultOptions = {
  size: undefined,
  maxToppings: 3,
  crusts: ["10SCREEN", "12SCREEN", "12THIN", "PBKIREZA", "14SCREEN", "14THIN", "P16IBKZA", "P10IGFZA", "P12IPAZA"],
  sauces,
  toppings,
}

export default function generatePizza(spec = {}) {
  const opts = Object.assign({}, defaultOptions, spec)
  const code = randFromArray(opts.crusts, opts.size)
  const p = new Pizza()
  p.setCrust(code)
  
  // Add the cheese
  p.addTopping({
    code: 'C'
  })

  // Add sauce
  p.addTopping({
    code: randFromArray(opts.sauces)
  })
  
  // Add optional toppings
  for (let i = 0; i < opts.maxToppings; i += 1) {
    p.addTopping({
      code: randFromArray(opts.toppings)
    })
  }

  return p
}