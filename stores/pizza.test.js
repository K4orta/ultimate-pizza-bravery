import test from 'ava'
import { Pizza } from './pizza'

test('It makes a pizza object', t => {
  const p = new Pizza()
  t.true(p.crust === undefined)
  t.true(p.toppings.length === 0)
})

test('Can add a crust', t => {
  const p = new Pizza()
  p.setCrust({code: '14SCREEN'})
  t.true(p.crust.code === '14SCREEN')
})

test('Can add a topping', t => {
  const p = new Pizza()
  p.addTopping({
    code: 'C',
  })
  t.true(p.toppings.length === 1)
  const firstTopping = p.toppings[0]
  t.deepEqual(firstTopping, {
    code: 'C',
    left: 1,
    right: 1
  })
})

test('Can add topping to only one side', t => {
  const p = new Pizza()
  p.addTopping({
    code: 'P',
    left: 1,
  })
  const leftTopping = p.toppings[0]
  t.deepEqual(leftTopping, {
    code: 'P',
    left: 1
  })

  p.addTopping({
    code: 'Z',
    right: 1,
  })
  const rightTopping = p.toppings[1]
  t.deepEqual(rightTopping, {
    code: 'Z',
    right: 1,
  })
})

test('Can add different amounts of toppings', t => {
  const p = new Pizza()
  p.addTopping({
    code: 'Z',
    left: 0,
    right: 1.5
  })
  const topping = p.toppings[0]
  t.deepEqual(topping, {
    code: 'Z',
    left: 0,
    right: 1.5
  })
})

test('Can init with a spec object', t => {
  const p = new Pizza({
    crust: {
      code: '12SCREEN'
    },
    toppings: [
      { code: 'X' },
      { code: 'Y' }
    ]
  })
  t.true(p.crust.code === '12SCREEN')
  t.true(p.toppings[0].code === 'X')
  t.true(p.toppings[1].code === 'Y')
})

test('Can get toppings without sauce or cheese', t => {
  const p = new Pizza()
  p.addTopping({code: 'C', tags: {Cheese: true}})
  p.addTopping({code: 'X', tags: {Sauce: true}})
  p.addTopping({code: 'P', tags: {}})
  t.true(p.toppingsOnly.length === 1)
})

test('Can remove a topping', t => {
  const p = new Pizza()
  p.addTopping({code: 'C', tags: {Cheese: true}})
  p.addTopping({code: 'X', tags: {Sauce: true}})
  p.addTopping({code: 'P', tags: {}})
  p.popTopping()
  t.true(p.toppingsOnly.length === 0)
})