import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDetails = ({ passedValue }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + passedValue);
                setPokemon(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
  
    }, [passedValue]);

    return (
        <div>
            {pokemon ? (
                <div>
                    <h2>Pokémon Details</h2>
                    <p>ID: {pokemon.id}</p>
                    <p>Name: {pokemon.name}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                    <h3>Abilities:</h3>
                    <ul>
                        {pokemon.abilities?

                            (pokemon.abilities.map((ability) => (
                            <li key={ability.name}>{ability.name}</li>
                            )))
                            : (
                                <p>Loading...</p>
                            )
                        }
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PokemonDetails;
