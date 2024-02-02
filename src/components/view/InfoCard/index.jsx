import React from 'react'
import { Loader } from '../Loader'

export const InfoCard = ({data, loader}) => {
  return (
    <div className="UsualCard__info ComponentWrapper">
        {
            loader ? <Loader/> :
            (
                <>
                    <div className="UsualCard__avatar">
                        {/* <img src={data.url} alt={data.name} /> */}
                    </div>
                    <div className="UsualCard__data">
                        name: {data?.name}
                    </div>
                </>
)
            }
    </div>
  )
}
