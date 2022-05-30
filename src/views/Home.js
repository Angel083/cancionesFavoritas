import Axios from "axios";
import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';
import { Card } from '../components/Card';
function Home() {
  const [canciones, setCanciones] = useState([]);
  useEffect(() => {
      Axios({
        url: "http://localhost:3001/api/v1/songs"
      })
        .then((response) => {
          setCanciones(response.data)
        })
  }, [setCanciones])
  
  return (
    <div className="">
      <header className="header">
        <h1>Canciones favoritas</h1>
      </header>
      <main>
        <Buttons></Buttons>
        <div className='card__container'>
          {canciones.map( ({titulo, grupo, anio, genero}) => (
          <Card 
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
