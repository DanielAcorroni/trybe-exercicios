import React from "react";
import CardPokemon from "./CardsPokemon";
import pokemons from "./data";
import "./App.css"

class CardsContainer extends React.Component {
    render() {
        return(
            <div className = "cards-container">
                {
                    pokemons.map((pokemon) => (
                        <CardPokemon pokemon={pokemon} />
                    ))
                }
            </div>
        )
    }
}

export default CardsContainer;