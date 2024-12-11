import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Bienvenido al universo de Rick and Morty</h1>
        <p>Explora personajes, episodios y más.</p>
        <div className="buttons">
          <Link to="/characters">
            <button className="explore-btn">Explorar Personajes</button>
          </Link>
          <Link to="/about">
            <button className="about-btn">Acerca de</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

