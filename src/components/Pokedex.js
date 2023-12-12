import React, { useState, useEffect } from 'react'
import { useQuery, useInfiniteQuery} from '@tanstack/react-query'
import PokedexList from './PokedexList';


export default function Pokedex() {

  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const pkmsPerPages = 20;


const getData = (offset) => {

  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + pkmsPerPages + '&offset=' + offset)
      .then((res) => res.json())
      .then((data) => {
       
          console.log(data)
      });
      
 }


  // const { isLoading, error, data } = useQuery(['pokemons'], () => getData(offset));

  


  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["character"],
    queryFn: getData,
    initialPageParam: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (firstPage) => firstPage.previous,
  });


// if (isLoading) return 'Cargando...'

 if (error) return 'Ocurrio un error: ' + error.message

  return (

 <div>
    <PokedexList  pokemons={pokemons} 
                  offset={offset} 
                  setOffset={setOffset} />

 </div>
  )

}
