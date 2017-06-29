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
  const p = generate({toppings: ['ABC1', 'ABC2', 'ABC3']})
  const toppings = p.toppings.filter(x => x.code.includes('ABC'))
  t.true(toppings.length === 3)
})

test('Adds sauce by default', t => {
  const p = generate({sauces: ['FAKE']})
  const sauce = p.toppings.find(x => x.code === 'FAKE')
  t.true(sauce.code === 'FAKE')
})