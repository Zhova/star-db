import React, { useState, useEffect } from 'react'
import { SwapiSerwice } from '../../../data/api';

import { Loader } from '../Loader/Loader';

import './UsualCard.sass'

export const UsualCard = () => {

    const [peopleData, setPeopleData] = useState(null);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        const swapi = new SwapiSerwice();

        function updatePeople() {
            swapi.getAllPeople()
                .then((people) => {
                    setPeopleData(people.results);
                    setLoader(false)
                    console.log(peopleData);
                });
        }

        updatePeople()

    }, [peopleData]);
    return (
        loader ? <Loader /> :
            <div className='UsualCard ComponentWrapper'>
                <div className="UsualCard__menu">
                    {peopleData.map((person) => {
                        return <div key={person.name} className="UsualCard__item">{person.name}</div>
                    })}
                </div>
                <div className="UsualCard__info">
                    <div className="UsualCard__avatar">
                        <img src="" alt="" />
                    </div>
                    <div className="UsualCard__data">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
