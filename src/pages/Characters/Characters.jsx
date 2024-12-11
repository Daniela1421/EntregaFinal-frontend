import { useContext, useState, useEffect } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext'
import Notification from '../../components/Notifications/Notification';
import { Link } from 'react-router-dom';
import './Characters.css';

const Characters = () => {
  const { addFavorite } = useContext(FavoritesContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  console.log("characters", characters)
  const handleAddFavorite = (character) => {
    addFavorite(character);
    document.querySelector('.notification-button').click();
  };

  return (
    <div className="characters-container">
      <h1>Personajes</h1>
      <Notification message="Agregado a favoritos" />
      <div className="character-list">
        {characters.map((character) => (
          <div className="character-card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Especie: {character.species}</p>
            <Link to={`/characters/${character.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;

