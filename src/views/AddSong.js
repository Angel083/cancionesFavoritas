import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import  Axios  from './../../node_modules/axios/index';
import { useNavigate } from "react-router-dom";
import url from "./../global/global"


function AddSong() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues :{
      titulo : "",
      grupo : "",
      anio : "",
      genero: ""
    },
    onSubmit: (values) => {
      
      Axios.post(`${url}/songs/AddSong`, values)
        .then(() => {navigate("/")})
    },
    validationSchema: Yup.object({
      titulo: Yup.string()
        .label("Titulo")
        .required("El titulo es requerido"),
      grupo: Yup.string()
        .label("Grupo")
        .required("El grupo es requerido"),
      anio: Yup.number()
        .min(1000, "Necesitas poner un canción superior al año 1000")
        .max(2022, "No puedes poner una canción superio al año actual")
        .required("El año es requerido"),
      genero: Yup.string()
          .label("Genero")
          .required("El genero es requerido"),
    })
  })
  return (
    <div className="">
      <header className="header">
        <h1>Agrega una nueva canción</h1>
      </header>
      <Link to="/">
        <button className='botton'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <main>
        <form onSubmit={formik.handleSubmit} className='formulario'>
          <div>
            <label>Titulo de la cancion</label>
            <input type="text" name="titulo" id="titulo"
              className={formik.touched.titulo && formik.errors.titulo ? 'border-red' : 'border-gray'}
              onChange={formik.handleChange}></input>
            {formik.touched.titulo && formik.errors.titulo && (
              <span className='text-red'>{formik.errors.titulo}</span>)}
          </div>
          <div>
            <label >Grupo</label>
            <input type="text" name="grupo" id="grupo"
              className={formik.touched.grupo && formik.errors.grupo ? 'border-red' : 'border-gray'}
              onChange={formik.handleChange}></input>
            {formik.touched.grupo && formik.errors.grupo && (
              <span className='text-red'>{formik.errors.grupo}</span>)}
          </div>
          <div>

            <label>Año</label>
            <input type="number" name="anio" id="anio"
              className={formik.touched.anio && formik.errors.anio ? 'border-red' : 'border-gray'}
              onChange={formik.handleChange}></input>
            {formik.touched.anio && formik.errors.anio && (
              <span className='text-red'>{formik.errors.anio}</span>)}
          </div>
          <div>
            <label>Género</label>
            <input type="text" name="genero" id="genero"
              className={formik.touched.genero && formik.errors.genero ? 'border-red' : 'border-gray'}
              onChange={formik.handleChange}></input>
            {formik.touched.genero && formik.errors.genero && (
              <span className='text-red'>{formik.errors.genero}</span>)}
          </div>
          <div>
            <button className='button formulario__boton' type='submit'>Enviar</button>
          </div>
          </form>
      </main>

    </div>
  );
}

export default AddSong;
