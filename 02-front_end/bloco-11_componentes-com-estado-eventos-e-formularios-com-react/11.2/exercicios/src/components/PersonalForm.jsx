import React, { Component } from 'react'
import InputAddress from './InputAddress'
import InputCity from './InputCity'
import InputCpf from './InputCpf'
import InputEmail from './InputEmail'
import InputHouseType from './InputHouseType'
import InputName from './InputName'
import InputState from './InputState'


export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      houseType: '',
      registerClick: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCleanButton = this.handleCleanButton.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
        [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      registerClick: true
    })
  }

  handleCleanButton() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      houseType: '',
      registerClick: false
    })
  }

  render() {
    const { name, email, cpf, address, city, state, registerClick, houseType } = this.state;
    return (
      <>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <InputName value={ name } handleChange={ this.handleChange } />
          <InputEmail value={ email } handleChange={ this.handleChange } />
          <InputCpf value={ cpf } handleChange={ this.handleChange } />
          <InputAddress value={ address } handleChange={ this.handleChange } />
          <InputCity value={ city } handleChange={ this.handleChange } />
          <InputState value={ state } handleChange={ this.handleChange } />
          <InputHouseType handleChange={ this.handleChange } />
          <button type="submit">Registrar</button>
          <button type="button" onClick={() => this.handleCleanButton()}>Limpar</button>
        </form>
        <div>
          {
            registerClick &&
            <>
              <p>Nome: {name}</p>
              <p>Email: {email}</p>
              <p>Cpf: {cpf}</p>
              <p>Endereço: {address}</p>
              <p>Cidade: {city}</p>
              <p>Estado: {state}</p>
              <p>Tipo de moradia: { houseType }</p>
            </>
          }
        </div>
      </>
    )
  }
}
