import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {  useQuery } from '@tanstack/react-query';

function Details() {
    
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery(['pokemon', id], () =>
  fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    .then((res) => res.json())
);


  if (isLoading) return 'Cargando...';

  if (error) return 'An error has occurred: ' + error.message;

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
    <img src={data.sprites.front_default} alt={data.nombre} height="170" /> 
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
  <strong>Nombre:</strong> {data.name} <br/>
     <strong>Tipo:</strong> {data.types.map(type => type.type.name).join(", ")}<br/>
    <strong>Altura:</strong> {data.height}''<br/>
    <strong>Peso:</strong> {data.weight} lbs.<br/><br/>
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
 <strong>Estadisticas Base<br/>{data.stats.map(stats => stats.base_stat).join(", ")}</strong> 
  </div>
  <div id="yellowBox2">
  <br/>
  <i className="bi bi-caret-right-fill"></i>

  <a href={`https://www.pokemon.com/es/pokedex/${data.name}`}>
  <strong>Más Info</strong>

</a>
 
  </div>
    <br/>
 
  <div id="bg_curve1_right"></div>
  <div id="bg_curve2_right"></div>
  <div id="curve1_right"></div>
  <div id="curve2_right"></div>

  <button onClick={() => navigate(`/details/${parseInt(id) - 1}`)}>Anterior</button>
      <button onClick={() => navigate(`/details/${parseInt(id) + 1}`)}>Siguiente</button>
</div>

    </nav>

    
  )
};

export default Details