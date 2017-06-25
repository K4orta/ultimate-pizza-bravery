import React from 'react'
import Router from 'next/router'

class ZipForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({
      zipcode: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const href = `/store-finder?zipcode=${this.state.zipcode}`
    const a = href
    Router.push(href, a, { shallow: false })
  }
  render() {
    return (
      <form>
        <input name="zipcode" type="text" onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default ZipForm
