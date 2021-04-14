import React,{Fragment,useEffect,useState} from 'react';
import Cookies from 'universal-cookie/es6';
import FormularioLogin from '../../components/FormularioLogin/formularioLogin';
import useFetch from '../../hooks/use_fetch';
import modelos from '../../paths/modelos';
import estado from '../../state_input/add_empleado';
import InicioCalidad from '../InicioCalidad/inicioCalidad';
import InicioLinea from '../InicioLinea/inicioLinea';

const Login = () =>{
    const cookies = new Cookies();
    const  [empleados,validate] = useFetch(modelos.getEmpleados);
    const {usuario,contraseña} = estado;
    const [datos,setDatos] = useState({
        usuario,
        contraseña,
        show: true,
        show1: false,
        show2: false
    })

    const handler = (e) =>{
        const {name,value} = e.target;
        setDatos({
            ...datos,
            [name]: value
        })
    }

    const iniciarSesion = () =>{
        const {usuario,contraseña} = datos;
        let con = 0;
        for(let i=0;i<empleados.length;i++){
            console.log(empleados[i].usuario)
            console.log(empleados[i].password)
            if(usuario === empleados[i].usuario && contraseña === empleados[i].password){
                con = con + 1;
                cookies.set('idempleado', empleados[i].idempleado, {path: "/"});
                cookies.set('nombre', empleados[i].nombre, {path: "/"});
                cookies.set('apellido', empleados[i].apellido, {path: "/"});
                cookies.set('usuario', empleados[i].usuario, {path: "/"});
                cookies.set('dni', empleados[i].dni, {path: "/"});
                cookies.set('rol', empleados[i].rol, {path: "/"});
            }else{
                console.log("No toma valor")
            }
        }
        if(con > 0 && cookies.get('rol') === 'Linea'){
                
            window.location.href="/iniciolinea";
        }else{
            if(con > 0 && cookies.get('rol') === 'Calidad'){
                window.location.href="/iniciocalidad";
            }else{
                alert('Usuario o contraseña mal ingresados');
            }
        }

    }

    const cerrarSesion = () =>{
        cookies.remove('idempleado',{path:"/"});
        cookies.remove('nombre',{path:"/"});
        cookies.remove('apellido',{path:"/"});
        cookies.remove('usuario',{path:"/"});
        cookies.remove('dni',{path:"/"});
        cookies.remove('rol',{path:"/"});
        setDatos({
            ...datos,
            ['show']: true,
            ['show1']: false,
            ['show2']: false,
            usuario,
            contraseña
        })
    }

    const {show,show1,show2} = datos;
    return(
        <Fragment>
            <div>{show?(<FormularioLogin iniciarSesion={iniciarSesion} datos={datos} handler={handler}/>):null}</div>
            <div>{show1?(<InicioLinea cerrarSesion={cerrarSesion}/>):null}</div>
            <div>{show2?(<InicioCalidad cerrarSesion={cerrarSesion}/>):null}</div>
        </Fragment>
    )
}

export default Login;