import React from 'react'

import { MainBlock } from '../view/MainBlock/MainBlock'
import { UsualCard } from '../view/UsualCard/UsualCard'

export const HomePage = () => {
  return (
    <div className='HomePage'>
      <MainBlock />
      <UsualCard />
    </div>
  )
}
