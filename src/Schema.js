import React from 'react'
import './App.css'

function Schema(props) {
  return (
    <div className="box">
    <span className="dot1"></span>

    <select id="schema" name="schema">
      <option value="first_name">First Name</option>
      <option value="last_name">Last Name</option>
      <option value="gender"> Gender</option>
      <option value="age"> Age</option>
      <option value="account_name">Account Name</option>
      <option value="city"> City</option>
      <option value="state">State</option>
    </select>
    <i  
    onClick={() => {
          props.handleRemoveCart(props.item)}}
      className="fa-solid fa-square-minus fa-3x"
      style={{ marginLeft: "30px" }}
    ></i>
  </div>
  )
}

export default Schema