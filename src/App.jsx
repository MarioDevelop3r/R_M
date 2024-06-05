import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Personaje from './components/Personaje';
import Inicio from './components/inicio';

import './App.css';

function App() {
  return (
    <div className="contenedor">
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/personaje/:id' element={<Personaje />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 