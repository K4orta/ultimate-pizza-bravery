import React from 'react'
import { get } from 'axios'
import Link from 'next/link'

class StoreList extends React.Component {
  render() {
    const { stores } = this.props
    const storeList = stores.map((store) => (
      <li key={store.StoreID}>
        <Link href={`config?store=${store.StoreID}`}>
          {store.AddressDescription}
        </Link>
      </li>
    ))
    return (
      <ul>
        {storeList}
      </ul>
    )
  }
}

export default StoreList