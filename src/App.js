import {useEffect, useState } from 'react';

const App = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/9/')
    .then(res => res.json())
    .then(res => setName(res.name));
  }, []);
  return <p>{name}</p>;
}

export default App;
