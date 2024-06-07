/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { todosPersonajes } from '../functions/funciones';


const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes); // Llama a la función cuando el componente se monte
  }, []);

  return (
    <>
      {personajes !== null ? (
        personajes.map((personaje) => (
          <div key={personaje.id}>
            <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
          </div>
        ))
      ) : ("no hay personajes")}
    </>
  )
}

export default Inicio
