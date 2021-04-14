import React,{ Fragment,useEffect,useState } from 'react';
import BodyLinea from '../../components/BodyLinea/budyLinea';
//Cookies
import Cookies from 'universal-cookie/es6';
//Components
import HeadPages from '../../components/headPages/headPages';
import FooterLinea from '../../components/FooterLinea/footeLinea';
//Paths
import modelos from '../../paths/modelos';
//hooks
import useFetch from '../../hooks/use_fetch';

const cookies = new Cookies();

const InicioLinea = ({cerrarSesion}) =>{
    const datosEmpleado = cookies.getAll();
    const [activo,setActivo]=useState({
        crear: false,
        iniciar: true,
        pausar: true,
        finalizar: true
    });
    const [modelo] = useFetch(modelos.getModelos);
    const [datosOp,setDatosOp] = useState({
        numero_op : '',
        estado : 'Creada',
        color_codigo : '',
        modelo_sku : '',
        modelo_objetivo : '',
        empleado_dni : datosEmpleado.dni,
        linea_numero : '',
        fecha_inicio : new Date().toLocaleDateString(),
        fecha_fin : '',
        hora_inicio : '',
        hora_fin : ''
    })
    
    const handler = (e) =>{
        const {name,value} = e.target;
        console.log(e.target)
        setDatosOp({
            ...datosOp,
            [name]: value
        })
    }

    const paquete ={
        datosOp,
        setDatosOp,
        handler,
        datosEmpleado,
        cerrarSesion,
        modelo,
        activo,setActivo
    }

    return(
        <div className="container">
            <HeadPages paquete={paquete}/>
            <BodyLinea paquete={paquete}/>
            <FooterLinea paquete={paquete}/>
        </div>
    )
}

export default InicioLinea;

    