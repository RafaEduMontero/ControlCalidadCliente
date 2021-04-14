import React,{Fragment  } from 'react';

const TextfieldObjetivo = ({onChange,name,className,modelo,modelo_sku,placeholder}) =>{
    return(
        <Fragment>
            {modelo.map((item,i) =>{
                const {sku,objetivo} = item;
                if(sku === modelo_sku){
                    return(
                        <input
                            placeholder={placeholder}
                            key={i}
                            type="text"
                            name={name}
                            value={objetivo}
                            className={className}
                            onChange={onChange}
                        />
                    )
                }
            })}
        </Fragment>
    )
}

export default TextfieldObjetivo;