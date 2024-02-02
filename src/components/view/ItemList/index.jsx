import React from 'react'

import { Loader } from '../Loader';

import './style.sass'

export const ItemList = ({listData, clickHandler, loader}) => {
  return (
    <div className="UsualCard__menu ComponentWrapper">

        {
          loader ? <Loader/>:
          listData.map((item) => {
              return <div key={item.name} onClick={() => {clickHandler(item.id)}} className="UsualCard__item ComponentWrapper">{item.name}</div>
          })
        }
    </div>
  )
}
