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
      html {
        font-size: 18px;
      }

      * {
        box-sizing: border-box;
      }

      body {
        background: #F15A24;
        color: #000;
        text-align: center;
        font-size: 100%;
        font-family: Arial, san-serif;
        padding: 0;
      }

      button {
        background: transparent;
        border: 2px solid #000;
        border-radius: .25rem;
        padding: .5rem 1rem;
      }

      a {
        color: black;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
      }

      input[type="text"] {
        border-radius: 5px;
        border: 0;
        padding: .5rem;
      }
    `}</style>
  </div>
  
)

export default Layout