import React, { useState, useEffect } from 'react'
import { SwapiSerwice } from '../../../data/api';

import './style.sass'

import { ItemList } from '../ItemList';
import { InfoCard } from '../InfoCard';

export const UsualCard = () => {

    const [peopleData, setPeopleData] = useState(null);
    const [personData, setPersonData] = useState(null);
    const [listLoader, setListLoader] = useState(true);
    const [infoCardLoader, setinfoCardLoader] = useState(true);

    const swapi = new SwapiSerwice();

    function updatePeople() {
        swapi.getAllPeople()
            .then((people) => {
                setPeopleData(people.results);
                setListLoader(false)
            });
    }

    function clickHandler() {
        swapi.getPerson(12)
            .then((person) => {
                setPersonData(person);
                setinfoCardLoader(false);
            });
    }


    useEffect(() => {
        updatePeople()
    });

    return (
            <div className='UsualCard'>
                <ItemList listData={peopleData} clickHandler={() => clickHandler()} loader={listLoader} />
                <InfoCard data={personData} loader={infoCardLoader}/>
            </div>
    )
}
