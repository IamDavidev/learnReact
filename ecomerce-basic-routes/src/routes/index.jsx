import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/Home';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};
