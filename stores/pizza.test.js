import test from 'ava'
import { Pizza } from './pizza'

test('It makes a pizza object', t => {
  const p = new Pizza()
  t.true(p.crust === undefined)
  t.true(p.toppings.length === 0)
})

test('Can add a crust', t => {
  const p = new Pizza()
  p.setCrust('14SCREEN')
  t.true(p.crust === '14SCREEN')
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
    side: {'1/1' : '1'},
  })
})

test('Can add topping to only one side', t => {
  const p = new Pizza()
  p.addTopping({
    code: 'P',
    left: '1',
  })
  const leftTopping = p.toppings[0]
  t.deepEqual(leftTopping, {
    code: 'P',
    side: {'1/2': '1'},
  })

  p.addTopping({
    code: 'Z',
    right: '1',
  })
  const rightTopping = p.toppings[1]
  t.deepEqual(rightTopping, {
    code: 'Z',
    side: {'2/2': '1'},
  })
})

test('Can add different amounts of toppings', t => {
  const p = new Pizza()
  p.addTopping({
    code: 'C',
    left: '0',
    right: '1.5'
  })
  const topping = p.toppings[0]
  t.deepEqual(topping, {
    code: 'C',
    side: {
      '1/2': '0',
      '2/2': '1.5'
    },
  })
})