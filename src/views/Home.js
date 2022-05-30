import React from 'react';
import Buttons from '../components/Buttons';
import { Card } from '../components/Card';

function Home() {
  return (
    <div className="">
      <header className="header">
        <h1>Canciones favoritas</h1>
      </header>
      <main>
        <Buttons></Buttons>
        <div className='card__container'>
          <Card titulo="TITULO largo que tendra que funcionar" grupo="grupo genail" año="2011" genero="pop rock"></Card>
          <Card titulo="TITULO mas corto que antes 2" grupo="grupo" año="año" genero="genero"></Card>
          <Card titulo="TITULO" grupo="grupo" año="año" genero="genero"></Card>
          <Card titulo="TITULO" grupo="grupo" año="año" genero="genero"></Card>
          <Card titulo="TITULO" grupo="grupo" año="año" genero="genero"></Card>
          <Card titulo="TITULO" grupo="grupo" año="año" genero="genero"></Card>
          <Card titulo="TITULO" grupo="grupo" año="año" genero="genero"></Card>
          <Card titulo="TITULO" grupo="grupo" año="año" genero="genero"></Card>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default Home;
