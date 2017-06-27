import test from 'ava'
import { Pizza } from './pizza'

test('It makes a pizza object', t => {
  const p = new Pizza()
  t.true(p.crust === undefined)
  t.true(p.toppings.length === 0)
})
