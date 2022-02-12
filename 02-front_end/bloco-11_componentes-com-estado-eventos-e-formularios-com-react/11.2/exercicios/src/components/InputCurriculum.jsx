import React, { Component } from 'react'

export default class InputCurriculum extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-curriculo">
        Resumo curriculo:
        <textarea
          name="resumoCurriculo"
          id="input-curriculo" cols="30"
          rows="10"
          maxLength={1000}
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
    )
  }
}
