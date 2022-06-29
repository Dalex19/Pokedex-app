import { useEffect, useState } from "react"

export const useFetchPkms = (defaultValue) => {
    const [data, setData] = useState(defaultValue)

    useEffect(() => {
      let request = Array.from({ length: 80 }).map((item, i) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
      );
      Promise.all(request)
        .then(res => res)
        .then(data => Promise.all(data.map((pkm) => pkm.json())))
        .then(dataJson => {
          let pkmsJson = dataJson.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            photo: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types,
          }));
          setData(pkmsJson);
        })
        .catch(error => console.error(`ups! ${error}`));
    }, []);
    return data
}
