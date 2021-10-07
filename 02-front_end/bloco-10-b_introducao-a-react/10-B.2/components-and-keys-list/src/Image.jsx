import React from "react";

class Image extends React.Component {
    render() {
        return (
            <img src={this.props.avatar} alt={`Avatar de ${this.props.name}`} />
        );
    }
}

export default Image;