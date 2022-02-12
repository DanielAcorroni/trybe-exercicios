import React from "react";

class InputSenha extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label> Senha: 
                <input type="password" name="senha" value={value} onChange={handleChange} />
            </label>
        )
    }
}

export default InputSenha;