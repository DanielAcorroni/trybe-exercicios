import React, { Component } from 'react'

export default class InputState extends Component {
  render() {
    const estados = ['AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MS',
      'MT',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO'];
    return (
      <label htmlFor="input-state">
        Estado:
        <select name="state" id="input-state" required>
          {
            estados.map((estado) => <option value={ estado }>{ estado }</option>)
          }
        </select>
      </label>
    )
  }
}
