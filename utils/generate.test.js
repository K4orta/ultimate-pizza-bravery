import test from 'ava'
import generate from './generate'

test('Genderated Pizza has a crust', t => {
  const p = generate()
  t.true(p.crust !== undefined)
})

test('Can set genderated Pizza size', t => {
  const p = generate({ size: '10' })
  t.true(p.crust.includes('10'))
})

test('Generated Pizza comes with cheese', t => {
  const p = generate()
  t.true(p.toppings[0].code === 'C')
})

test('By default, generates a pizza with 3 toppings', t => {
  const p = generate()
  t.true(p.toppings.length === 4)
})