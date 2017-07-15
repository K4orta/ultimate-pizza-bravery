import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Shake from 'shake.js'
import Router from 'next/router'

import Layout from './layout'

class Intro extends React.Component {
  didShake() {
    Router.push('create')
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
      <div>
        <Head>
          <title>Ultimate Pizza Bravery</title>
        </Head>
        <Layout title="Ultimate Pizza Bravery">
          <h1>Ultimate Pizza Bravery</h1>
          <Link prefetch href="/create">
            <p>Shake your device to get started</p>
          </Link>
        </Layout>
      </div>
    )
  }
}

export default Intro
