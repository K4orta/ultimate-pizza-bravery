import React from 'react'
import { toJS } from 'mobx'
import { observer, Provider } from 'mobx-react'
import Layout from '../layout'
import generate from '../../utils/generate'
import { initPizza } from '../../stores/pizza'
import Pizza from './pizza'
import VisualizePizza from '../../components/pizza/visualize'
import Shake from 'shake.js'

class OptionsView extends React.Component {
  constructor(props) {
    super(props)
    this.pizza = initPizza(props.pizza)
    this.onGen = this.onGen.bind(this)
    this.didShake = this.didShake.bind(this)
  }
  static async getInitialProps() {
    return {
      pizza: generate({}, initPizza())
    }
  }
  onGen() {
    this.pizza = generate({}, this.pizza)
  }
  didShake() {
    this.pizza = generate({}, this.pizza)
  }
  componentDidMount() {
    this.shake = new Shake({
      threshold: 15,
      timeout: 1000
    })
    this.shake.start()
    window.addEventListener('shake', this.didShake)
  }
  componentWillUnmount() {
    this.shake.stop()
    window.removeEventListener('shake', this.didShake) 
  }
  render() {
      const { pizza } = this.props
      const toppings = pizza.toppings.map(x => (
        <div key={x.code}>{x.name}</div>
      ))
    return (
      <Provider pizza={this.pizza}>
        <Layout title="Options">
          <h1>Options</h1>
          <button onClick={this.onGen}>Generate</button>
          <VisualizePizza />
          <Pizza/>
        </Layout>
      </Provider>
    )
  }
}

export default OptionsView
