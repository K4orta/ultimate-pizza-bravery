import React from 'react'
import { observer, Provider } from 'mobx-react'
import Layout from '../layout'
import generate, { genTopping } from '../../utils/generate'
import { initPizza } from '../../stores/pizza'
import { initOptions } from '../../stores/options'
import Describe from '../../components/pizza/describe'
import VisualizePizza from '../../components/pizza/visualize'
import AmountSlider from '../../components/controls/amount-slider'
import Shake from 'shake.js'
import Link from 'next/link'

class OptionsView extends React.Component {
  constructor(props) {
    super(props)
    this.pizza = initPizza(props.pizza)
    this.options = initOptions(props.options)
    this.onGen = this.onGen.bind(this)
    this.didShake = this.didShake.bind(this)
    this.changeAmount = this.changeAmount.bind(this)
  }
  static async getInitialProps() {
    return {
      options: initOptions(),
      pizza: generate({}, initPizza())
    }
  }
  changeAmount(e) {
    this.options.setMaxToppings(e.target.value)
    if (this.pizza.toppingsOnly.length > e.target.value) {
      this.pizza.popTopping()
    }

    if (this.pizza.toppingsOnly.length < e.target.value) {
      this.pizza.addTopping(
        genTopping({blacklist: this.pizza.toppings})
      )
    }
  }
  onGen() {
    generate({maxToppings: this.options.maxToppings}, this.pizza)
  }
  didShake() {
    this.onGen()
  }
  componentDidMount() {
    this.shake = new Shake({
      threshold: 5,
      timeout: 200
    })
    this.shake.start()
    window.addEventListener('shake', this.didShake)
  }
  componentWillUnmount() {
    this.shake.stop()
    window.removeEventListener('shake', this.didShake) 
  }
  render() {
    return (
      <Provider pizza={this.pizza} options={this.options}>
        <Layout title="Options">
          <VisualizePizza onClick={this.onGen} />
          <AmountSlider
            value={this.options.maxToppings}
            onChange={this.changeAmount}
          >
              Toppings:
          </AmountSlider>
          <Describe />
          <button><Link href="info"><a>Order it</a></Link></button>
        </Layout>
      </Provider>
    )
  }
}

export default observer(OptionsView)
