import React from 'react'
import { toJS } from 'mobx'
import { observer, Provider } from 'mobx-react'
import Layout from '../layout'
import generate from '../../utils/generate'
import { initPizza } from '../../stores/pizza'
import Pizza from './pizza'
import VisualizePizza from '../../components/pizza/visualize'
import Shake from 'shake.js'
import Link from 'next/link'

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
    generate({}, this.pizza)
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
      <Provider pizza={this.pizza}>
        <Layout title="Options">
          <button onClick={this.onGen}>Generate</button>
          <style jsx>{`
            button {
              background: #444;
              border: 0;
              border-radius: .25rem;
              color: white;
              padding: .5rem 1rem;
            }
          `}</style>
          <VisualizePizza />
          <Pizza/>
          <button><Link href="info"><a>Order it</a></Link></button>
        </Layout>
      </Provider>
    )
  }
}

export default OptionsView
