import React from 'react';
import { useParams } from 'react-router-dom';
const EditSong = () => {
  const { id } = useParams
  console.log(id);
  
  return <>
    <p>Hola mundo </p>
  </>;
}

export default EditSong;