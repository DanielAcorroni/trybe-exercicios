import React from "react";

class InputEstadoCivil extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label>Estado Civil: 
                <select name="estadoCivil" value={value} onChange={handleChange}>
                    <option value="">--</option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="Dvorciado">Divorciado</option>
                </select>
            </label>
        )
    }
}

export default InputEstadoCivil;