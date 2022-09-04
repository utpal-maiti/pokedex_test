import React from "react"
import './App.css'

export default function Pokedex() {
    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type="text" />
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
        </form>
    )
  }