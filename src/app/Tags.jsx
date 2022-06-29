import React from 'react'
import bgColor from './hooks/bgColor'

import {useFetchTypes} from './hooks/useFetchTypes'

export default function Tags({changePkm}) {
  const allTypes = useFetchTypes('https://pokeapi.co/api/v2/type/',[])
  return (
    <div className='w-full lg:justify-center overflow-x-auto p-2  mx-auto flex gap-2'>
       <button onClick={() => changePkm('all')} className='rounded-full border bg-white p-2'>All</button>
      <div className='flex gap-1 py-1'>
      {
        allTypes.map((type, i) => (
          <button key={i} onClick={() => changePkm(type)} className={`${bgColor(type)} rounded-full px-2 items-center`}>{type}</button>
        ))
      }
      </div>
    </div>
  )
}
