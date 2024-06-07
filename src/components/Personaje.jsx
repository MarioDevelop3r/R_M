
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { unicoPersonaje } from "../functions/funciones"

const Personaje = () => {


  const params = useParams();
  useEffect(() => {
    unicoPersonaje(params.id)

  }, [])

  return (
    <div>
     
      {/* <div key={id}> */}
            <a href={params.id}>{params.name}</a>
            {/* <img src={params.image} alt="" />
            <p>{params.species}</p>
            <p>{params.status}</p>
            <p>{params.gender}</p>
            <p>{params.origin.name}</p>
            <p>{params.location.name}</p>
          </div> */}
    </div>
  );
}

export default Personaje