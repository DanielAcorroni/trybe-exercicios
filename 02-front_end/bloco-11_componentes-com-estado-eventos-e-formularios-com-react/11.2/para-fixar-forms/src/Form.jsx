import React from "react";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import InputSobreVoce from "./InputSobreVoce";
import InputEstadoCivil from "./InputEstadoCivil";

class Form extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this)
        
        this.state = {
            email: '',
            senha: '',
            sobreVoce: '',
            estadoCivil: ''
        }
    };

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return(
            <form>
                <InputEmail value={this.state.email} handleChange={this.handleChange} />
                <InputSenha value={this.state.senha} handleChange={this.handleChange} />
                <InputSobreVoce value={this.state.sobreVoce} handleChange={this.handleChange} />
                <InputEstadoCivil value={this.state.estadoCivil} handleChange={this.handleChange} />
            </form>
        )
    }
}

export default Form;