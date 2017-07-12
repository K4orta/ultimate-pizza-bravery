import React from 'react'

class DeliveryInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      state: '',
      zipcode: '',
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    const update = {};
    update[e.target.id] = e.target.value
    this.setState(update);
  }
  render() {
    return (
      <div className="">
        <form onChange={this.onChange} action="">
          <div>
          </div>
          <div className="AddressField">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" value={this.state.firstName} />
          </div>
          <div className="AddressField">
            <label htmlFor="lastName" value={this.state.lastName}>Last Name</label>
            <input id="lastName" type="text" />
          </div>
          <div className="AddressField">
            <label htmlFor="address">Address</label>
            <input id="address" type="text" />
          </div>
          <div className="AddressField">
            <label htmlFor="address2"></label>
            <input id="address2" type="text" />
          </div>
          <div className="AddressField">
            <label htmlFor="city">City</label>
            <input id="city" type="text" />
          </div>
          <div className="AddressField">
            <label htmlFor="zipcode">Zipcode</label>
            <input id="zipcode" type="text" />
          </div>
        </form>
        <style jsx>{`
          form {
            margin: 0 auto;
            max-width: 25rem;
          }

          .AddressField {
            display: flex;
            margin: .5rem 0;
          }

          .AddressField label {
            flex: 1;
            text-align: right; 
            margin-right: 1rem;
            max-width: 25%;
          }

          .AddressField input {
            flex: 1;
          }
        `}</style>
      </div>
    )
  }
}

export default DeliveryInfo