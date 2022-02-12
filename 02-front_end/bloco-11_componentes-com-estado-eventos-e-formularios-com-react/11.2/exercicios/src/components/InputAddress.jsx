import React, { Component } from 'react'

export default class InputAddress extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-address">
        Endereço:
        <input
          type="text"
          name="address"
          id="input-address"
          maxLength={200}
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
    )
  }
}
