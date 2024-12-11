import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <p>Cargando...</p>;

  return (
    <div className="character-detail-container">
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>Especie: {character.species}</p>
      <p>Género: {character.gender}</p>
      <p>Estado: {character.status}</p>
    </div>
  );
};

export default CharacterDetail;
