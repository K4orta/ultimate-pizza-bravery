import crusts from '../data/crusts'
import sizes from '../data/sizes'
import toppingData from '../data/toppings'
import { Pizza } from '../stores/pizza'

const toppings = toppingData
  .filter(x => !x.tags['Sauce'] && !x.tags['Cheese'])
  .map(x => x.code)

function randFromArray(arr, filter) {
  let filtered = arr
  if (filter !== undefined) {
    filtered = arr.filter(x => x.includes(filter))
  }
  return filtered[Math.floor(Math.random() * filtered.length)]
}

const defaultOptions = {
  size: undefined,
  maxToppings: 3,
  crusts: ["10SCREEN", "12SCREEN", "12THIN", "PBKIREZA", "14SCREEN", "14THIN", "P16IBKZA", "P10IGFZA", "P12IPAZA"],
  toppings: [],
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


  for (let i = 0; i < opts.maxToppings; i += 1) {
    p.addTopping({
      code: randFromArray(toppings)
    })
  }

  return p
}