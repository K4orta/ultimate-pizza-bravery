class PaymentStore {
  constructor() {
    this.billingInfo = {
      zipcode: '',
      phone: '',
      firstname: '',
      lastname: '',
      email: '',
    }
    
    this.creditCard = {
      number: '',
      exp: '',
      ccv: '',
    }
  }
}
