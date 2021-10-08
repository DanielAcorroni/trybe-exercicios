import React from "react";
import "./App.css"

class CardPokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        const { value, measurementUnit } = averageWeight;
        return (
            <div className="card">
                <div className="info">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{`Average weight: ${value} ${measurementUnit}`}</p>
                </div>
                <div className="photo">
                    <img src={image} alt={`Imagem do pokemon ${name}`} />
                </div>
            </div>
        )
    }
}

export default CardPokemon;