import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Conceptos from './components/Conceptos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Conceptos />
      </header>
    </div>
  );
}

export default App;
