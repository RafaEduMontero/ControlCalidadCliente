import React, { Fragment } from 'react';
//Components
import HeadPages from '../../components/headPages/headPages';
//Cookies
import Cookies from 'universal-cookie/es6';
import BodySeleccionCalidad from '../../components/BodySeleccionCalidad/bodySeleccionCalidad';

const cookies = new Cookies();

const InicioCalidad = ({ cerrarSesion }) => {
    const datosEmpleado = cookies.getAll();
    const paquete = {
        cerrarSesion,
        datosEmpleado
    }
    return (
        <Fragment>
            <div className="container">
                <HeadPages paquete={paquete} />
                <BodySeleccionCalidad paquete={paquete} />
            </div>
        </Fragment>
    )
}

export default InicioCalidad;