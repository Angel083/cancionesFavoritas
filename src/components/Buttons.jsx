import React from "react";
import { Link } from 'react-router-dom';
import { faPlus, faGrip, faGripLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Buttons = () => {
  return <div>
    <div className='buttons__container'>
      <Link to="/AddSong">
        <button className='botton button__add'>
          <FontAwesomeIcon icon={faPlus} />
          <div className="button__add__text">
          <p>Agregar</p>
          </div>
        </button>
      </Link>
      <div>
        <button className='botton button__row distribution active' id='row'>
          <FontAwesomeIcon icon={faGripLines} />
        </button>
        <button className='botton button__grid distribution' id='grid'>
          <FontAwesomeIcon icon={faGrip} />
        </button>
      </div>
    </div>
  </div>;
};

export default Buttons;
