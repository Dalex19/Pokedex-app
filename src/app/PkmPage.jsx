import React, {useState, useEffect} from 'react'
import {useFetchPkms} from './hooks/useFetchPkms'
import PkmCard from './PkmCard';
import Tags from './Tags';

export default function PkmPage() {
  let allOriginPkm = useFetchPkms([]);
  const [allPkms, setAllPkms] = useState([])

  useEffect(()  =>  {
    setAllPkms(allOriginPkm)
  },[allOriginPkm])
 
  const changePkm = (type) => {
    setAllPkms(allOriginPkm)

    if (type === "all") setAllPkms(allOriginPkm);
    else {
      let filterType = allOriginPkm.filter((pokemon) =>
          pokemon.types.some((tipo) => tipo.type.name === type)
        )
        .map((tem2) => {
          let nuevosTem = { ...tem2 };

          return nuevosTem;
        });
      setAllPkms(filterType);
    }
  };
  
  return (
    <>
      <Tags changePkm={changePkm} />
      <div className="w-4/5 flex flex-wrap justify-center gap-2 py-2 h-4/5 overflow-y-scroll  mx-auto">
        {allPkms.map((pkm) => (
          <PkmCard
            key={pkm.id}
            id={pkm.id}
            types={pkm.types}
            photo={pkm.photo}
            name={pkm.name}
          />
        ))}
      </div>
    </>
  );
}


