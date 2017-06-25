import React from 'react'
import { get } from 'axios'

class StoreList extends React.Component {
  render() {
    const { stores } = this.props
    const storeList = stores.map((store) => (
      <li key={store.StoreID}>{store.AddressDescription}</li>
    ))
    return (
      <ul>
        {storeList}
      </ul>
    )
  }
}
export default StoreList