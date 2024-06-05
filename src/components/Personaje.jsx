
import { useParams } from 'react-router-dom';

function Personaje() {
  let { id } = useParams();

  return (
    <div>
      <h1>Personaje {id}</h1>
      {/* Resto del código para mostrar la información del personaje */}
    </div>
  );
}

export default Personaje;