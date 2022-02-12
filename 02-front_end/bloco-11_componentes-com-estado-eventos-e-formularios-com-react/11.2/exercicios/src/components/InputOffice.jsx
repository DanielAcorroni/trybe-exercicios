import React, { Component } from 'react'

export default class InputOffice extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-cargo">
        Cargo:
        <textarea
          name="cargo"
          id="input-cargo" cols="30"
          rows="10"
          maxLength={40}
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
    )
  }
}
