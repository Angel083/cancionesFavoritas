import React from "react";
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = (body) => {
  return <div className="card gridCard">
    <div className="card__content">
      <div className="card__info">
        <h2>{body.titulo}</h2>
        <p>{body.grupo}</p>
        <p>{body.año}</p>
        <p>{body.genero}</p>
      </div>
      <div className="card__options">
        <button>
          <FontAwesomeIcon icon={faEllipsisV}/>
        </button>
      </div>
    </div>
  </div>;
};
