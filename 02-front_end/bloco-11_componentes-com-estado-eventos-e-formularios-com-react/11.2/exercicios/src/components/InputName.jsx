import React, { Component } from 'react'

export default class InputName extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-name">
        Nome:
        <input
          type="text"
          name="name"
          id="input-name"
          maxLength={40}
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
    )
  }
}
