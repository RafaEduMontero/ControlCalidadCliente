import React,{Fragment,useState  } from 'react';

import TextField from './textfield';

const SelectModelo = ({name,modelo,onChange,value,disabled}) =>{
    return(
        <Fragment>
            <select className="form-control" name={name} disabled={disabled} onChange={onChange} value={value}>
                {modelo.map((item,i) =>{
                    const {sku} = item;
                    return(
                        <option value={sku} key={i}>{sku}</option>
                    )
                })}
            </select>
        </Fragment>
    )
}

export default SelectModelo;