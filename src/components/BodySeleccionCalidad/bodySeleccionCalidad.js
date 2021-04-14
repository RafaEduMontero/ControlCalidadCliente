import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ButtonSend from '../../atomics/button_send';
import use_fetch from '../../hooks/use_fetch';
import modelos from '../../paths/modelos';
import swal from 'sweetalert';

const BodySeleccionCalidad = ({paquete}) => {
    const {datosEmpleado} = paquete;
    const [asiganacionOp,setAsignacionOp] = useState({
        op_numero_op: '',
        empleado_dni: datosEmpleado.dni,
        estado: 'Ocupada',
        hora: '',
        fecha: ''
    })
    const [opDisponibles] = use_fetch(modelos.getOpDisponibles);
    console.log(opDisponibles)

    let history = useHistory();
    const asignarInspeccion = (numero_op,idop) =>{
        const op = {...asiganacionOp,
                    op_numero_op: numero_op,
                    hora: new Date().toTimeString(),
                    fecha: new Date().toLocaleDateString};
        
        axios.post(modelos.getAsignacionInspeccion,op).then(res =>{
            setAsignacionOp(res.data);
            history.push(`/iniciocalidad/opseleccionada/${idop}`)
        }).catch(e =>{
            console.log(e);
            swal({
                title: `La OP N°${op.op_numero_op} está ocupada`,
                icon: 'warning',
                button: 'OK',
                dangerMode: true
            })
        })
    }

    return (
        <Fragment>
            <h1>Órdenes de Producción Disponibles</h1>
            <div className="row">
                {opDisponibles.map((item, i) => {
                    const { modelo_sku, modelo_objetivo, linea_numero, color_codigo, numero_op,idop } = item;
                    return (
                        <Fragment>
                            <div className="col-3" key={i}>
                                <div key={i} className="card border-info">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item font-weight-bold">OP N°: {numero_op}</li>
                                        <li className="list-group-item">Línea: {linea_numero}</li>
                                        <li className="list-group-item">Modelo: {modelo_sku}</li>
                                        <li className="list-group-item">Objetivo: {modelo_objetivo}</li>
                                        <li className="list-group-item">Color: {color_codigo}</li>
                                    </ul>
                                    <div className="card-body">
                                        <ButtonSend label="Inspeccionar" onClick={() => asignarInspeccion(numero_op,idop)}/>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                }
                )
                }
            </div>
        </Fragment>
    )
}

export default BodySeleccionCalidad;

{/* <Link className="btn btn-success" to={`/iniciocalidad/opseleccionada/${idop}`}>Inspeccionar</Link> */}
