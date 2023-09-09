import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    
  const { id } = useParams();

    const [pokemonDetail, setPokemonDetail] = useState({});
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/'+id)
        .then((res) => res.json())
        .then((data) => { 
            const pkmName = data.name.charAt().toUpperCase() + data.name.substring(1)
            const pokemonDetailsRequest = {
                nombre: pkmName,
                id: data.id,
                img: data.sprites.front_default,
                type: data.types.map(type => type.type.name).join(", "),
                stats:data.stats.map(stats => stats.base_stat).join(", "),
                height: data.height,
                weight: data.weight
               };
               setPokemonDetail(pokemonDetailsRequest)
            });
    },[id]);
  return (
    <nav>
      <div id="left">
  <div id="logo"></div>
  <div id="bg_curve1_left"></div>
  <div id="bg_curve2_left"></div>
  <div id="curve1_left">
    <div id="buttonGlass">
      <div id="reflect"> </div>
    </div>
    <div id="miniButtonGlass1"></div>
    <div id="miniButtonGlass2"></div>
    <div id="miniButtonGlass3"></div>
  </div>
  <div id="curve2_left">
    <div id="junction">
      <div id="junction1"></div>
      <div id="junction2"></div>
    </div>
  </div>
  <div id="screen">
    <div id="topPicture">
      <div id="buttontopPicture1"></div>
      <div id="buttontopPicture2"></div>
    </div>  
    <div id="picture">
      <img src={pokemonDetail.img} alt={pokemonDetail.nombre} height="170" />
    </div>
    <div id="buttonbottomPicture"></div>
    <div id="speakers">
      <div className="sp"></div>
      <div className="sp"></div>
      <div className="sp"></div>
      <div className="sp"></div>
    </div>
  </div>
  <div id="bigbluebutton"></div>
  <div id="barbutton1"></div>
  <div id="barbutton2"></div>
  <div id="cross">
    <div id="leftcross">
      <div id="leftT"></div>
    </div>
    <div id="topcross">
      <div id="upT"></div>
    </div>
    <div id="rightcross">
      <div id="rightT"></div>
    </div>
    <div id="midcross">
      <div id="midCircle"></div>
    </div>
    <div id="botcross">
      <div id="downT"></div>
    </div>
  </div>
</div>
<div id="right">
  <div id="stats">
    <strong>Nombre:</strong> {pokemonDetail.nombre} <br/>
    <strong>Tipo:</strong> {pokemonDetail.type}<br/>
    <strong>Altura:</strong> {pokemonDetail.height}''<br/>
    <strong>Peso:</strong> {pokemonDetail.weight} lbs.<br/><br/>
    <strong></strong><br/>

  </div>
  <div id="blueButtons1">
    <div className="blueButton"></div>
    <div className="blueButton"></div>
    <div className="blueButton"></div>
    <div className="blueButton"></div>
    <div className="blueButton"></div>
  </div>
  <div id="blueButtons2">
    <div className="blueButton"></div>
    <div className="blueButton"></div>
    <div className="blueButton"></div>
    <div className="blueButton"></div>
    <div className="blueButton"></div>
  </div>
  <div id="miniButtonGlass4"></div>
  <div id="miniButtonGlass5"></div>
  <div id="barbutton3"></div>
  <div id="barbutton4"></div>
  <div id="yellowBox1">
<br/>
  <strong>Estadisticas Base<br/>{pokemonDetail.stats}</strong></div>
  <div id="yellowBox2">
  <br/>
  <a href={`https://www.pokemon.com/es/pokedex/${pokemonDetail.nombre}`}>
  <strong>Más Info</strong>
</a>
 
  </div>
    <br/>
 
  <div id="bg_curve1_right"></div>
  <div id="bg_curve2_right"></div>
  <div id="curve1_right"></div>
  <div id="curve2_right"></div>
</div>
    </nav>
  )
}

export default Details