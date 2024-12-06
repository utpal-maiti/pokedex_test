import React, { useState, useEffect } from 'react';
import './App.css'

import PokemonDetails from './PokemonDetails';

export default function Pokedex() {
    const [name, setName] = useState("");
    const [pokemonDetailId, setPokemonDetailId] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);

        const formData = new FormData(event.target);
        console.log(formData);
        setPokemonDetailId(name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <input type="submit" value="Search" />
            </div>
            <div>
                <label>
                    <textarea rows="40" cols="100" readOnly defaultValue={"API Reference: https://pokeapi.co/ \r\n Please help us complete Pokedex by retrieving following information! \r\n 1) id \r\n 2) name\r\n 3) weight\r\n 4) height\r\n 5) ability name(s) (please list them all)"}>
                    </textarea>
                </label>
            </div>
            <PokemonDetails passedValue={pokemonDetailId} />
        </form>

    )
}