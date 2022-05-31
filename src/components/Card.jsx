import React from "react";
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Card = (body) => {
  const urlEdit = `/EditSong/${body.id}`
  return <Link to={urlEdit} className="card " id="card">
    <div className="card__content">
      <div className="card__info">
        <h2>{body.titulo}</h2>
        <p>{body.grupo}</p>
        <p>{body.anio}</p>
        <p>{body.genero}</p>
      </div>
      <div className="card__options">
        {/* <button>
          <FontAwesomeIcon icon={faEllipsisV}/>
        </button> */}
      </div>
    </div>
  </Link>;
};
