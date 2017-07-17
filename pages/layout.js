import React from 'react'
import Head from 'next/head'

const Layout = ({title, children}) => (
  <div className="PageContainer">
    <Head>
      <title>Real Ultimate Bravery - {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    {children}
    <style global jsx>{`
      html {
        font-size: 18px;
        height: 100%;
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
        margin: 0;
        min-height: 100%;
      }

      button {
        background: transparent;
        border: 2px solid #000;
        border-radius: .25rem;
        box-shadow: 2px 5px 8px rgba(0,0,0,0.15);
        padding: .5rem 1rem;
      }

      a {
        color: black;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: Bitter, Georgia, serif;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      input[type="text"] {
        border-radius: 5px;
        border: 0;
        font-size: 18px;
        padding: .5rem;
        width: 100%;
      }

      .PageContainer {
        padding: 1rem;
      }
    `}</style>
    <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" />
  </div>
  
)

export default Layout
