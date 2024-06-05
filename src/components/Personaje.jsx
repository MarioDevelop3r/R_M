
import { useParams } from 'react-router-dom';

function Personaje() {
  let { id } = useParams();

  return (
    <div>
     
      <div key={id}>
            <a href={Personaje.id}>{Personaje.name}</a>
            <img src={Personaje.image} alt="" />
            <p>{Personaje.species}</p>
            <p>{Personaje.status}</p>
            <p>{Personaje.gender}</p>
            <p>{Personaje.origin.name}</p>
            <p>{Personaje.location.name}</p>
          </div>
    </div>
  );
}

export default Personaje;