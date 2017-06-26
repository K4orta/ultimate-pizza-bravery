import React from 'react'
import Head from 'next/head'

const Layout = ({title, children}) => (
  <div>
    <Head>
      <title>Real Ultimate Bravery - {title}</title>
    </Head>
    {children}
    <style global jsx>{`
      body {
        background: #FF851B;
        color: #444;  
      }

      a {
        color: #fff;
      }
    `}</style>
  </div>
  
)

export default Layout