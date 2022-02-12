import React from "react";

class InputSobreVoce extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label>Um pouco sobre você: 
                <textarea name="sobreVoce" cols="30" rows="10" value={value} onChange={handleChange}></textarea>
            </label>
        )
    }
}

export default InputSobreVoce;