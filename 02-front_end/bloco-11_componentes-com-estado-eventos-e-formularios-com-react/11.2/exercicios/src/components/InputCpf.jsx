import React, { Component } from 'react'

export default class InputCpf extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-cpf">
        CPF:
        <input
          type="text"
          name="cpf"
          id="input-cpf"
          maxLength={11}
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
    )
  }
}
