import React from 'react'
import { useQuery, useInfiniteQuery} from '@tanstack/react-query'
import PokedexList from './PokedexList';


export default function Pokedex() {


  const pkmsPerPages = 20;
  
  const fetchPokemons = async ({ pageParam = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=" + pkmsPerPages }) => {
  
  const res = await fetch(pageParam);
  return res.json();

};



const { isLoading, error, data, fetchNextPage } = useInfiniteQuery({ 
  queryKey: ['pokemons'],
  queryFn: fetchPokemons,
  getNextPageParam: (lastPage) => lastPage.next
})




if (isLoading) return 'Cargando...'

 if (error) return 'Ocurrio un error: ' + error.message

  return (

    <>
    
    <div>
      {/* <pre style={{ backgroundColor: 'white', fontSize: 16}}>{JSON.stringify(data, null, 2)}</pre> */}
      {data?.pages.map(page => {
        return page.results.map( pokemon =>     
        <div>
          <div>
            <span>{pokemon.name}</span>
          </div>
      </div>
      )

      })}
        
      </div>

       <button onClick={() => fetchNextPage()}>
        Cargar más
      </button>
    
    </>



  )

}
