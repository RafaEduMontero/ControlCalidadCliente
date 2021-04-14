import React,{Fragment  } from 'react';
//paths
import modelos from '../paths/modelos';
//hooks
import useFetch from '../hooks/use_fetch'

const SelectLinea = ({name,register,disabled}) =>{
    const [lineas,validate] = useFetch(modelos.getLineas);
    return(
        <Fragment>
            <select className="form-control" disabled={disabled} name={name} ref={register({required: true})}>
                {lineas.map((item,i) =>{
                    return(
                        <option value={item.numero} key={i}>{item.numero}</option>
                    )
                })}
            </select>
        </Fragment>
    )
}

export default SelectLinea;