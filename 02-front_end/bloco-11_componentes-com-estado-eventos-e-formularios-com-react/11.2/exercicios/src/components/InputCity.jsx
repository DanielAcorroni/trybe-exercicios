import React, { Component } from 'react'

export default class InputCity extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-city">
        Cidade:
        <input
          type="text"
          name="city"
          id="input-city"
          maxLength={28}
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
    )
  }
}
