import test from 'ava'
import generate, { genTopping } from './generate'
import { toJS } from 'mobx'

test('Genderated Pizza has a crust', t => {
  const p = generate()
  t.true(p.crust !== undefined)
})

test('Can set genderated Pizza size', t => {
  const p = generate({ size: '10' })
  t.true(p.crust.code.includes('10'))
})

test('Generated Pizza comes with cheese', t => {
  const p = generate()
  t.true(p.toppings[1].code === 'C')
})

test('By default, generates a pizza with 3 toppings', t => {
  const p = generate({toppings: [{code: 'ABC1'}, {code: 'ABC2'}, {code: 'ABC3'}]})
  const toppings = p.toppings.filter(x => x.code.indexOf('ABC') !== -1)
  t.true(toppings.length === 3)
})

test('Adds sauce by default', t => {
  const p = generate({sauces: [{code: 'FAKE'}]})
  const sauce = p.toppings.find(x => x.code === 'FAKE')
  t.true(sauce.code === 'FAKE')
})

test('Can control the max number of toppings', t => {
  const p = generate({ maxToppings: 1, toppings: [{code: 'ABC'}, {code: 'ABC2'}]})
  const toppings = p.toppings.filter(x => x.code.indexOf('ABC') !== -1)
  t.true(toppings.length === 1)
})

test('Can add a single, random topping', t => {
  const p = generate({ maxToppings: 0 })
  p.addTopping(genTopping())
  const toppings = p.toppingsOnly
  t.true(toppings.length === 1)
})

test('Will blacklist any used topping', t => {
  const toppingList = [{code: 'A'}, {code: 'B'}, {code: 'K'}]
  const p = generate({ maxToppings: 1, toppings: [] })
  p.addTopping({code: 'A'})
  p.addTopping({code: 'B'})
  p.addTopping(genTopping({toppings: toppingList, blacklist: p.toppings}))
  const k = p.toppingsOnly.find(x => x.code === 'K')
  t.true(k !== undefined)
})
