import React, { Component } from 'react'
import InputCurriculum from './InputCurriculum';
import InputOffice from './InputOffice';
import InputOfficeDescription from './InputOfficeDescription';

export default class ProfessionalForm extends Component {
  constructor() {
    super();

    this.state = {
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
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
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
      registerClick: false
    })
  }

  render() {
    const { resumoCurriculo, cargo, descricaoCargo, registerClick } = this.state;
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <InputCurriculum value={ resumoCurriculo } handleChange={ this.handleChange } />
          <InputOffice value={ cargo } handleChange={ this.handleChange } />
          <InputOfficeDescription value={ descricaoCargo } handleChange={ this.handleChange } />
          <button type="submit">Registrar</button>
          <button type="button" onClick={() => this.handleCleanButton()}>Limpar</button>
        </form>
        <div>
          {
            registerClick &&
            <>
              <p>Resumo curriculo: {resumoCurriculo}</p>
              <p>Cargo: {cargo}</p>
              <p>Descrição do cargo: {descricaoCargo}</p>
            </>
          }
        </div>
      </>
    )
  }
}
