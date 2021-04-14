import React,{Fragment, useEffect  } from 'react';
import ButtonSend from '../../atomics/button_send';
import useFetch from '../../hooks/use_fetch';
//Axios
import Axios from 'axios';
import modelos from '../../paths/modelos';
import funciones from '../../funtions/funciones';

const FooterLinea = ({paquete}) =>{
    const {datosOp,setDatosOp} = paquete;
    const {postOP} = funciones;
    const {numero_op,linea_numero,modelo_objetivo,estado,empleado_dni} = datosOp;
    const  [ops,validate] = useFetch(modelos.getOp);

    return(
        <Fragment>
            {/* <ButtonSend onClick={() => nuevoDatos(setDatosOp)} label="Crear Op"/>
            <ButtonSend onClick={() => submitHandler(datosOp)} label="Iniciar Op"/> */}
        </Fragment>
    )
}

export default FooterLinea;