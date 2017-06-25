import React from 'react'

const Topping = ({children, onChange}) => (
  <label>
    {children}
    <input name={children} type="checkbox" onChange={onChange} />
  </label>
)

export default Topping
