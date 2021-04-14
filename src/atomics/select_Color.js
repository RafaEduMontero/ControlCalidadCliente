import React,{ Fragment} from 'react';
import modelos from '../paths/modelos';
//hooks
import useFetch from '../hooks/use_fetch';

const SelectColor = ({register,name,disabled}) =>{
    const [color] = useFetch(modelos.getColores);
    return(
        <Fragment>
            <select className="form-control" name={name} ref={register({required: true})} disabled={disabled}>
                {color.map((item,i) =>{
                    return(
                        <option value={item.codigo} key={i}>{item.codigo}</option>
                    )
                })}
            </select>
        </Fragment>
    )
}

export default SelectColor;