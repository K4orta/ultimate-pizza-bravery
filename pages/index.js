import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Real Ultimate Bravery</title>
    </Head>
    <h1>Intro</h1>
    <Link href="config"><a>Configuration</a></Link>
    <style global jsx>{`
      body {
        background: #800;
        color: #fff;  
      }

      a {
        color: #fff;
      }
    `}</style>
  </div>
)