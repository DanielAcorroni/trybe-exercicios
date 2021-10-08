import React from "react";
import CardPokemon from "./CardsPokemon";
import pokemons from "./data";
import "./App.css"

class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0,
            type: ''
        }

        this.nextPokemon = this.nextPokemon.bind(this)
        this.prevPokemon = this.prevPokemon.bind(this)
        this.typePokemon = this.typePokemon.bind(this)
    }

    typePokemon(pokeType) {
        this.setState((previousType, _props) => ({
            clickCounter: previousType.clickCounter = 0,
            type: previousType.type = pokeType,
        }))
        console.log(this);
    }

    filterPokemon() {
        const allPokemon = [];
        pokemons.filter(typePokemon => (
            typePokemon.type.includes(this.state.type)
        )).map(pokemon => ( allPokemon.push(pokemon) ))
        return allPokemon;
    }

    nextPokemon() {
        this.setState((previousCount, _props) => ({
            clickCounter: previousCount.clickCounter + 1,
        }))
        if (this.state.clickCounter === this.filterPokemon().length-1) {
            this.setState((_props) => ({
                clickCounter: 0,
            }))
        }
    }

    prevPokemon() {
        this.setState((previousCount, _props) => ({
            clickCounter: previousCount.clickCounter - 1,
        }))
        if (this.state.clickCounter === 0) {
            this.setState((_props) => ({
                clickCounter: this.filterPokemon().length-1,
            }))
        }
    }

    render() {
        const pokemon = this.filterPokemon();
        console.log(pokemon);
        return(
            <main className="pokedex-display">
                <div>
                    <button onClick={ () => {this.typePokemon('')} }>All</button>
                    <button onClick={ () => {this.typePokemon('Fire')} }>Fire</button>
                    <button onClick={ () => {this.typePokemon('Psychic')} }>Psychic</button>
                    <button onClick={ () => {this.typePokemon('Electric')} }>Electric</button>
                    <button onClick={ () => {this.typePokemon('Bug')} }>Bug</button>
                    <button onClick={ () => {this.typePokemon('Poison')} }>Poison</button>
                    <button onClick={ () => {this.typePokemon('Normal')} }>Normal</button>
                    <button onClick={ () => {this.typePokemon('Dragon')} }>Dragon</button>
                </div>
                <div className = "cards-container">
                    {
                        <CardPokemon pokemon={pokemon[this.state.clickCounter]} />
                    }
                </div>
                <div>
                    <button onClick={this.prevPokemon}>Previous</button>
                    <button onClick={this.nextPokemon}>Next</button>
                </div>
            </main>
        )
    }
}

export default CardsContainer;