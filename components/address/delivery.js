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
          <div className="AddressRow">
            <div className="AddressField">
              <label htmlFor="state">State</label>
              <input id="state" type="text" />
            </div>
            <div className="AddressField">
              <label htmlFor="zipcode">Zipcode</label>
              <input id="zipcode" type="text" />
            </div>
          </div>
        </form>
        <style jsx>{`
          form {
            margin: 0 auto;
            max-width: 25rem;
          }

          .AddressField {
            margin: .75rem 0;
          }

          .AddressRow .AddressField:first-child {
            margin-right: 1rem;
          }

          .AddressField label {
            text-align: left;
            margin-right: 1rem;
            margin-bottom: .25rem;
            display: block;
          }

          .AddressRow{
            display: flex;
          }
        `}</style>
      </div>
    )
  }
}

export default DeliveryInfo