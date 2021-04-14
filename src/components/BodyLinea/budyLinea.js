import React,{useState,useEffect,Fragment} from 'react';
import LabelField from '../../atomics/label_fields';
import SelectColor from '../../atomics/select_Color';
import SelectLinea from '../../atomics/select_Linea';
import SelectModelo from '../../atomics/select_Modelo';
import TextField from '../../atomics/textfield';
import SpanObjetivo from '../../atomics/span_objetivo';
import { useForm } from "react-hook-form";
//Axios
import Axios from 'axios';
import funciones from '../../funtions/funciones';
import ButtonSend from '../../atomics/button_send';
import use_fetch from '../../hooks/use_fetch';
import modelos from '../../paths/modelos';
//sweetAler
import swal from 'sweetalert';

const BodyLinea = ({paquete}) =>{
    const [desabilitado,setDesabilitado] = useState(false);
    const [opActiva2,setOpActiva2] = useState('')
    const{postOP,putOPIniciar,putOPPausar,putOPFinalizar} = funciones;
    const [color,setColor] = useState({
        cIniciar: '',
        cPausar: ''
    })
    const { register, handleSubmit } = useForm();
    const{modelo,datosOp,setDatosOp,handler,activo,setActivo}=paquete;
    const{modelo_sku}=datosOp;
    const form = document.getElementById("form");
    const objetivo = document.getElementById("objetivo");

    const onSubmit = (data) =>{
        console.log(data)
        postOP(datosOp, setActivo,setDatosOp, activo, setDesabilitado, setOpActiva2,data);
    }

    const iniciarOP = () =>{
        putOPIniciar(setActivo,setColor,setOpActiva2,activo,color,opActiva2);
    }

    console.log(datosOp);
    console.log(opActiva2)

    const pausarOP = () =>{
        putOPPausar(setColor,setOpActiva2,color,opActiva2);
    }

    const finalizarOP = () =>{
        putOPFinalizar(color,opActiva2,datosOp,setDesabilitado,setColor,setActivo,setOpActiva2,setDatosOp,form,objetivo)
    }

    const {crear,iniciar,pausar,finalizar} = activo;
    const{cIniciar,cPausar}=color;
    return(
        <Fragment>
            <form className="row" id="form">
                <div className="form-group">
                    <LabelField label={"Línea"}/>
                    <SelectLinea name='linea_numero' register={register} disabled={desabilitado}/>
                    <LabelField label={"Modelo"}/>
                    <SelectModelo modelo={modelo} name='modelo_sku' disabled={desabilitado} onChange={handler} value={modelo_sku}/>
                    <LabelField label={"Objetivo"}/>
                    <SpanObjetivo className="form-control" id="objetivo" disabled={desabilitado} register={register} modelo_sku={modelo_sku} name="modelo_objetivo" modelo={modelo}/>
                    <LabelField label={"Color"}/>
                    <SelectColor name='color_codigo' register={register} disabled={desabilitado}/>
                    <LabelField label={"N° de OP"}/>
                    <TextField name='numero_op' className="form-control" register={register} disabled={desabilitado}/>
                </div>
            </form>
            <div className="row">
                <div className="col-3">
                    <ButtonSend onClick={handleSubmit(onSubmit)} label="Crear" className={`btn ${crear ? 'btn-dark' : 'btn-success'}`} disabled={crear}/>
                </div>
                <div className="col-3">
                    <ButtonSend onClick={iniciarOP} className={cIniciar} label="Iniciar" disabled={iniciar}/>
                </div>
                <div className="col-3">
                    <ButtonSend onClick={pausarOP} className={cPausar} label="Pausar" disabled={pausar}/>
                </div>
                <div className="col-3">
                    <ButtonSend label="Finalizar" onClick={finalizarOP} disabled={finalizar} className="btn-danger"/>                </div>
            </div>
        </Fragment>
    )
}

export default BodyLinea;

