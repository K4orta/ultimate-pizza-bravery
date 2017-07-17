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
      <div className="IntroContainer">
        <Head>
          <title>Ultimate Pizza Bravery</title>
        </Head>
        <Layout title="Ultimate Pizza Bravery">
          <h1>Ultimate <span className="PizzaTitle">Pizza</span> Bravery</h1>
          <Link prefetch href="create">
            <a>
              <p>Shake your device to get started (or click here)</p>
            </a>
          </Link>
        </Layout>
        <style jsx>{`
            .IntroContainer {
              height: 100vh;
              display: flex;
              flex-direction: col;
              align-items: center;
            }

            h1 {
              font-size: 3rem;
              line-height: 1;
              text-shadow: 0 4px 1px rgba(0,0,0,.25);
              text-stroke: 2px #F15A24;
              margin-top: 0;
            }

            .PizzaTitle {
              color: #fff;
            }
          `}</style>
      </div>
    )
  }
}

export default Intro
