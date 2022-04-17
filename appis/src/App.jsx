import './App.css';
import Conceptos from './components/Conceptos';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Task from './pages/tasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/tasks" replace />} />
            <Route path="/posts" element={<Conceptos />} />
            <Route path="/tasks" element={<Task />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
