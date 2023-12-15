import React from "react";
import { Link } from "react-router-dom";

export default function PokedexList({ pokemons, onFetchNextPage }) {



  return (
    <>

      <div className="poke-list">
        {pokemons?.pages.map((page) => {
          return page.results.map((pokemon) => {
            return (
              
              <div className="card-container">
                <span className="poke-number">#</span>
                <img className="poke-image" alt={pokemon.name}></img>
                <h2 className="poke-name">{pokemon.name}</h2>
              </div>
            );
          });
        })}
      </div>

      <button onClick={onFetchNextPage}>Cargar más</button>
    </>
  );
}
