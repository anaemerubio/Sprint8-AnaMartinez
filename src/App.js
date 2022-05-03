import {useEffect, useState } from 'react';

const App = () => {
  const [starship, setStarship] = useState([]);

  useEffect(() => {
    async function fetchStarship() {
      let res = await fetch ('https://swapi.dev/api/starships');
      let data = await res.json();
      setStarship(data.results);
    }

    fetchStarship();
    console.log(starship);

  }, []);
  return <p>hola</p>;
}

export default App;