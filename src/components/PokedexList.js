import React from 'react'
import { Link } from 'react-router-dom';



export default function PokedexList({ pokemons, offset, setOffset }) {
    
    
    
  return (
    <>
    <div className ="poke-list" >
      {pokemons.map((pokemon) => (
        
        <Link key={pokemon.id} to={`/details/${pokemon.id}`}>

          <div className ="card-container" key={pokemon.id}>
          <span className="poke-number">#{pokemon.id}</span>
         <img className="poke-image" src={pokemon.img} alt={pokemon.name}></img>
         <h2 className="poke-name">{pokemon.name}</h2>
         </div>

         </Link>
      ))}

    </div>
        
    <button onClick={() => setOffset(offset + 20)}>Cargar más</button>
    </>
    
  )
     }


