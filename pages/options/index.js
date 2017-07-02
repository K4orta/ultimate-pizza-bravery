import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import Layout from '../layout'
import generate from '../../utils/generate'
import { initPizza } from '../../stores/pizza'

function onGen() {
  console.log('Hi')
}

class OptionsView extends React.Component {
  static async getInitialProps() {
    return {
      pizza: generate({}, initPizza())
    }
  }
  render() {
    return (
      <Layout title="Options">
        <h1>Options</h1>
        <button onClick={onGen}>Generate</button>
      </Layout>
    )
  }
}

export default observer(OptionsView)
