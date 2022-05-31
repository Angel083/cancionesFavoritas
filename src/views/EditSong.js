import React ,{useState, useEffect} from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import Axios from './../../node_modules/axios/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import url from "./../global/global"


const EditSong = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  let navigate = useNavigate();
  

  useEffect(() => {
    Axios.get(`${url}/songs/${id}`)
    .then(({data}) => {setItem(data); console.log(data);
    })
    // console.log(item)
  }, [setItem, id]);
  function handleChange () {
    Axios.delete(`${url}/songs/${id}`)
    navigate("/")
  }
  
  return <>
    <Link to="/">
      <button className='botton'>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </Link>
    {item.map((item) => (
      <div className='item__contenedor' key={id}>
        <h2>Información de:</h2>
        <p>{item.titulo}</p>
        <p>{item.grupo}</p>
        <p>{item.anio}</p>
        <p>{item.genero}</p>
        <form onSubmit={handleChange}>
          <button type='submit' className='button item__delete'>Eliminar canción</button>
        </form>
      </div>
    ))}
  </>;
}

export default EditSong;