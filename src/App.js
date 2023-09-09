
import './App.css';
import './css/details.css'
import Pokedex from './components/Pokedex';
import Details from './components/Details'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <div className="App">
      <header className="App-header">
    
        <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pokédex_logo.png" className="logo" alt="logo" />

        <BrowserRouter>
          <Routes>
            <Route index element={<Pokedex />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>

        
      </header>
    </div>

    <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  );
}

export default App;
