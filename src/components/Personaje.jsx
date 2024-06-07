import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { unicoPersonaje } from '../functions/funciones';

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);
  const params = useParams();

  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, [params.id]);

  if (!personaje) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>Id {params.id}</h2>
      <p>Nombre {personaje.name}</p>
      <img src={personaje.image} alt={personaje.name} />
    </>
  );
};

export default Personaje;

