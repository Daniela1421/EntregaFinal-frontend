import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import About from './pages/About/About';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import './App.css';
import FavoritesProvider from './context/FavoritesContext';

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <div className="app-container">
          <div className="menu-container">
            <h1 className="menu-title">Menú</h1>
            <ul className="menu-list">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/characters">Personajes</Link></li>
              <li><Link to="/about">Acerca de</Link></li>
            </ul>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/about" element={<About />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
