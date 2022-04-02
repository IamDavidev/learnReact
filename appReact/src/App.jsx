import { useState } from 'react';
import { useApi } from './hooks/useApi';
import './App.scss';
import Character from './components/character/Character';
import Search from './components/Search/Search';

function App() {
  const [enpoint, setEndpoint] = useState('character');
  const [apiData, loading, { status, message }] = useApi(enpoint);

  console.log(status, message, loading, apiData);

  const findCharacter = (character) => {
    setEndpoint(`character?name=${character}`);
  };

  if (loading) return <p>Cargando data ... </p>;

  return (
    <div className="App">
      <h1>RENDER APP RICK ADN MORTY CONCEPTOS DE REACT</h1>
      <div className="render">
        <Search method={findCharacter} />
        <div className="card">
          {apiData?.results?.map((item) => {
            return <Character key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
