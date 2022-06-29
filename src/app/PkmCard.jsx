import React from 'react'
import bgColor from './hooks/bgColor'

export default function PkmCard({id, types, photo, name}) {
  return (
    <div className={`w-48 transition-all ease-in-out hover:scale-105 ${bgColor(types[0].type.name)} h-32 rounded-lg flex flex-col justify-center border relative`}>
      <div className="absolute -top-2 -left-2 w-2/3 h-full">
        <img src={photo} className="w-28 h-32 " />
      </div>
      <h3 className="font-bold text-white text-right text-lg px-4 relative z-10 ">
        {name}
      </h3>
      <div className="text-right px-4 flex gap-2 flex-col">
        {types.map((type, i) => (
          <p key={i} className='bg-white/30 leading-3 rounded-full self-end py-2 px-2'>{type.type.name}</p>
        ))}
      </div>
      <p className="text-right px-4">#{id}</p>
    </div>
  )
}
