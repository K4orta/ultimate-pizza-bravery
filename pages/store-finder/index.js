import React from 'react'
import ZipForm from './zip-form'
import StoreList from './store-list'
import { get } from 'axios'

class StoreFinder extends React.Component {
  static async getInitialProps({query}) {
    const stores = await get('http://localhost:8081/stores/94122')
    return {
      query,
      stores: stores.data
    }
  }
  render() {
    const { zipcode, stores } = this.props.query
    let form
    if (!zipcode) {
      form = <ZipForm />
    }
    let list
    if (zipcode) {
      list = <StoreList stores={this.props.stores} />
    }

    return (
      <div className="StoreFinderView">
        <h1>Store finder</h1>
        {form}
        {list}
      </div>
    )
  }
}

export default StoreFinder
