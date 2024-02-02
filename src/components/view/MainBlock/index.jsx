import React, { useState, useEffect } from 'react'

import './style.sass'

import { SwapiSerwice } from '../../../data/api';
import { Loader } from '../Loader';

export const MainBlock = () => {
  const [id, setId] = useState(null);
  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);
  const [population, setPopulation] = useState(null);
  const [diameter, setDiameter] = useState(null);
  const [climate, setClimate] = useState(null);
  const [loader, setLoader] = useState(true);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  useEffect(() => {
    const swapi = new SwapiSerwice();

    function updatePlanet(id) {
      swapi.getPlanet(id)
        .then((planet) => {
          setId(id)
          setImg(`https://starwars-visualguide.com/assets/img/planets/`)
          setName(planet.name)
          setPopulation(planet.population)
          setDiameter(planet.diameter)
          setClimate(planet.climate)
          setLoader(false)
        })
    }

    const planetInterval = setInterval(() => {
      updatePlanet(getRandomInt(2, 19))
    }, 5000);

    return () => clearInterval(planetInterval);
  }, [id]);

  return (

    loader ? <Loader /> :

      <div className='MainBlock ComponentWrapper'>
        <div className='MainBlock__avatar avatar'>
          <img src={`${img + id}.jpg`} alt={name} />
        </div>
        <div className='description'>
          <h2 className='description'>{name}</h2>
          <ul className='description-list'>
            <li className='description-list__item'>
              <span className='description-list__title'>Diametr: </span>
              <span className='description-list__value'>{diameter}</span>
            </li>
            <li className='description-list__item'>
              <span className='description-list__title'>Population: </span>
              <span className='description-list__value'>{population}</span>
            </li>
            <li className='description-list__item'>
              <span className='description-list__title'>Climate: </span>
              <span className='description-list__value'>{climate}</span>
            </li>
          </ul>
        </div>
      </div>
  )
}
