import React from "react";

class InputEmail extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return(
            <label> Email: 
                <input type="email" name="email" value={value} onChange={handleChange} />
            </label>
        )
    }
}

export default InputEmail;