import crusts from '../data/crusts'
import sizes from '../data/sizes'
import toppings from '../data/toppings'

function randFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generatePizza(size, maxToppings) {
  const code = randFromArray(["10SCREEN", "12SCREEN", "12THIN", "PBKIREZA", "14SCREEN", "14THIN", "P16IBKZA", "P10IGFZA", "P12IPAZA"])
  const options = randFromArray(toppings)

  return {
    code,
    quantity: 1,
    options
  }
}