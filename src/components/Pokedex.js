import React, { useState, useEffect } from 'react'
import { useQuery,} from '@tanstack/react-query'
import PokedexList from './PokedexList';


export default function Pokedex() {

  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const pkmsPerPages = 20;


const getData = (offset) => {

  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + pkmsPerPages + '&offset=' + offset)
      .then((res) => res.json())
      .then((data) => {
        // Usar map para crear un nuevo arreglo con el ID, el nombre, la URL y la imagen de cada pokemon
        return data.results.map((pokemon) => {
          const pkmID = pokemon.url.split('/')[6];
          const pkmName = pokemon.name.charAt().toUpperCase() + pokemon.name.substring(1);
          return {
            id: pkmID,
            name: pkmName,
            url: pokemon.url,
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pkmID+".png"
          };
        });
      });
      
 }


  const { isLoading, error, data } = useQuery(['pokemons', offset], () => getData(offset));

  useEffect(() => {
    if (data) {
      setPokemons(prevPokemons => prevPokemons.concat(data));
    }
  }, [data]);




  if (isLoading) return 'Cargando...'

  if (error) return 'Ocurrio un error: ' + error.message

  return (

 <div>
    <PokedexList  pokemons={pokemons} 
                  offset={offset} 
                  setOffset={setOffset} />

 </div>
  )

}
