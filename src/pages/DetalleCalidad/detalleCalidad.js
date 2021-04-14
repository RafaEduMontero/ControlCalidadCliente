import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router';
import ButtonSend from '../../atomics/button_send';
import use_fetch from '../../hooks/use_fetch';
import modelos from '../../paths/modelos';
import { useForm } from "react-hook-form";

const DetalleCalidad = () => {
    const { id } = useParams();
    const [horaSeleccionada, setHoraSeleccionada] = useState('');
    const [opSeleccionada] = use_fetch(modelos.getOp + `/${id}`)
    const [defectosObservado] = use_fetch(modelos.getDefectosObservado);
    const [defectosReproceso] = use_fetch(modelos.getDefectosReproceso);
    const [turnos] = use_fetch(modelos.getTurno);
    const { modelo_sku, modelo_objetivo, linea_numero, color_codigo, numero_op } = opSeleccionada;
    const { register, handleSubmit } = useForm();

    const horaActual = parseInt(new Date().toLocaleTimeString());
    console.log(horaActual)
    const mañana = [6, 7, 8, 9, 10, 11, 12, 13];
    const tarde = [14, 15, 16, 17, 18, 19, 20, 21];
    const noche = [22, 23, 0, 1, 2, 3, 4, 5];

    let botones = [];

    if (horaActual === mañana.find(m => m === horaActual)) {
        botones = mañana;
    } else {
        if (horaActual === tarde.find(t => t === horaActual)) {
            botones = tarde;
        } else {
            if (horaActual === noche.find(n => n === horaActual)) {
                botones = noche;
            }
        }
    }

    const datosRecibidos = (data) =>{
        console.log(data)
    }

    console.log(botones)
    return (
        <Fragment>
            <div className="container">
                <h1>OP seleccionada</h1>
                <h4>OP: {numero_op}</h4>
                <h4>Linea: {linea_numero}</h4>
                <h4>Modelo: {modelo_sku}</h4>
                <h4>Objetivo: {modelo_objetivo}</h4>
                <h4>Color: {color_codigo}</h4>
                <div class="btn-group btn-group-toggle">
                    {botones.map((item, i) => {
                        return (
                            <div className="form-group form-check">
                                    <label className="form-check-label">{item}:00</label>
                                <div>
                                    <input name="hora" type="checkbox" className="form-check-input" value={`${item}:00`} ref={register}/>
                                </div>
                            </div>
                    )
                })}
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3 className="d-flex justify-content-center">Defectos Reproceso</h3>
                        <div className="row">
                            {defectosReproceso.map((item, i) => {
                                const { descripcion } = item;
                                return (
                                    <div className="col-6" key={i}>
                                        <div class="btn-group btn-group-toggle">
                                            <label class="btn btn-warning">
                                                <input type="radio" name="options" id="option1" checked /> -
                                            </label>
                                            <label class="btn btn-success">
                                                <input type="radio" name="options" id="option3" /> +
                                            </label>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-6">
                        <h3 className="d-flex justify-content-center">Defectos Observado</h3>
                        <div className="row">
                            {defectosObservado.map((item, i) => {
                                let a =0;
                                const { descripcion } = item;
                                return (
                                    <div className="col-6" key={i}>
                                        <div class="btn-group btn-group-toggle">
                                            <label class="btn btn-warning">
                                                <input type="radio" name="options" id="option1"/> -
                                            </label>
                                            <input name={`tipo_defecto${a+i}`} class="text-white bg-secondary" ref={register} value={descripcion}/>
                                            <label class="btn btn-success">
                                                <input type="radio" name="options" id="option3" onClick={handleSubmit(datosRecibidos)}/> +
                                            </label>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DetalleCalidad;