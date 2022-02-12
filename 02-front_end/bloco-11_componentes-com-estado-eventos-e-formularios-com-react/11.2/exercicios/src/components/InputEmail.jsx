import React, { Component } from 'react'

export default class InputEmail extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-email">
        Email:
        <input
          type="text"
          name="email"
          id="input-email"
          maxLength={50}
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
    )
  }
}
