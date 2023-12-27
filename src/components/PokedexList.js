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
                <span className="poke-number">
                  #{pokemon.url.split("/")[6]}
                </span>
                <img
                  className="poke-image"
                  alt={pokemon.name}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.url.split("/")[6]
                  }.png`}
                ></img>
                <h2 className="poke-name">{pokemon.name.charAt().toUpperCase() + pokemon.name.substring(1)}</h2>
              </div>
            );
          });
        })}
      </div>

      <button onClick={onFetchNextPage}>Cargar más</button>
    </>
  );
}
