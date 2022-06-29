import { useEffect, useState } from "react";

export const useFetchTypes = (url, defaultValue) => {
  const [data, setData] = useState(defaultValue);

  const filterTypes = (types) => {
    return types.filter((type) =>
      [
        "grass",
        "fire",
        "water",
        "bug",
        "normal",
        "poison",
        "electric",
        "ground",
        "fairy",
        "fighting",
        "psychic",
        "rock",
      ].includes(type)
    );
  };

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let types = filterTypes(data.results.map((item) => item.name));
        setData(types);
      })
      .catch(error => console.error(`error en tu peticion: ${error}`));
  }, []);
  return data;
};

