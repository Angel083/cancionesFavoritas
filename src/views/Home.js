import Axios from "axios";
import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import url from "./../global/global"

function Home() {
  const [canciones, setCanciones] = useState([]);
  useEffect(() => {
      Axios.get(`${url}/songs`
      )
        .then((response) => {
          setCanciones(response.data)
          console.log(response.data);
          
        })
  }, [setCanciones])
  
  return (
    <div className="">
      <header className="header">
        <h1>Canciones favoritas</h1>
      </header>
      <main>
      <Link to="/AddSong">
        <button className='botton button__add'>
          <FontAwesomeIcon icon={faPlus} />
          <div className="button__add__text">
          <p>Agregar</p>
          </div>
        </button>
      </Link>
        <div className='card__container'>
          { canciones.map( ({titulo, grupo, anio, genero, id}) => (
          <Card
            key={id}
            id={id}
            titulo={titulo} 
            grupo={grupo} 
            anio={anio}
            genero={genero}>
          </Card>))}
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default Home;
