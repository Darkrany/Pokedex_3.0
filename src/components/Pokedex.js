import React, { useState, useEffect } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import PokedexList from './PokedexList';



const getData = () => {
  const pkmsPerPages = 20;
  const offset = 0;
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

export default function Pokedex() {

  // const [currentPage, setCurrentPage] = useState(1);
  // const [pkmsPerPages, setPkmsPerPages] = useState(20);

  
  const { isLoading, error, data } = useQuery({
    
    queryKey: ['pokemons'],
    queryFn: getData
           
  })
  if (isLoading) return 'Cargando...'

  if (error) return 'Ocurrio un error: ' + error.message

  return (
 <div>

 
  

 <PokedexList pokemons={data} ></PokedexList>
  {/* <Pagination 

    currentPage={currentPage} 
    setCurrentPage={setCurrentPage}  
    pkmsPerPages={pkmsPerPages}
    setPkmsPerPages={setPkmsPerPages}
    
    ></Pagination>  */}
 </div>
  )

}
