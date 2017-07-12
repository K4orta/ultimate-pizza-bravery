import React from 'react'
import Head from 'next/head'

const Layout = ({title, children}) => (
  <div>
    <Head>
      <title>Real Ultimate Bravery - {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    {children}
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }

      body {
        background: #FF851B;
        color: #444;
        text-align: center;
        font-family: Arial, san-serif;
      }

      a {
        color: #fff;
      }
    `}</style>
  </div>
  
)

export default Layout