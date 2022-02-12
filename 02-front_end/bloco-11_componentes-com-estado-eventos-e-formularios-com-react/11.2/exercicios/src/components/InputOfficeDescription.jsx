import React, { Component } from 'react'

export default class InputOfficeDescription extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-descricao-cargo">
        Descrição cargo:
        <textarea
          name="descricaoCargo"
          id="input-descricao-cargo" cols="30"
          rows="10"
          maxLength={ 500 }
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
    )
  }
}
