import React from 'react';
import {} from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function AddSong() {
  return (
    <div className="">
      <header className="header">
        <h1>Agrega una nueva canción</h1>
      </header>
      <Link to="/">
        <button className='botton ' href="#">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <main>
        <h1>
          Hooa mundo
        </h1>
      </main>
        
    </div>
  );
}

export default AddSong;
