/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { todosPersonajes } from '../functions/funciones';
import Personaje from './Personaje';

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);


  // Asegúrate de utilizar la sintaxis correcta para definir el componente funcional
  useEffect(() => {
    todosPersonajes(setPersonajes); // Llama a la función cuando el componente se monte
  }, []);

  return (
    <>
      {personajes !== null ? (
        personajes.map(Personaje => (
          <div key={Personaje.id}>
            <a href="#">{Personaje.name}</a>
            <img src={Personaje.image} alt="" />
            <p>{Personaje.species}</p>
            <p>{Personaje.status}</p>
            <p>{Personaje.gender}</p>
            <p>{Personaje.origin.name}</p>
            <p>{Personaje.location.name}</p>
          </div>
        ))
      ) : ("Cargando...")}
    </>
  )
}

export default Inicio
