import React,{Fragment} from 'react';
//Atomics
import ButtonCloseSesion from '../../atomics/button_closeSesion';
import Clock from '../../atomics/clock';



const HeadPages = ({paquete}) =>{
    const {cerrarSesion,datosEmpleado} = paquete;
    const {nombre,apellido,rol,dni} = datosEmpleado;
    return(
        <Fragment>
            
                <div className="row justify-content-between">
                    <div className="col-md-3 align-self-center">
                        <Clock/>
                    </div>
                    <div className="col-md-3">
                        <h4>Supervisor de: {rol}</h4>
                        <h4>{nombre} {apellido}</h4>
                        <h5>{dni}</h5>
                    </div>
                    <div className="col-md-3 align-self-center">
                        <ButtonCloseSesion label='Cerrar Sesión' onClick={cerrarSesion}/>
                    </div>
                </div>

        </Fragment>
    )
}

export default HeadPages;