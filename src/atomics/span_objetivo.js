import React,{Fragment} from 'react';

const SpanObjetivo = ({register,name,className,modelo,modelo_sku,id}) =>{ 
    let obj = '' ;
    modelo.map((item,i) =>{
        const {sku,objetivo} = item
        if(modelo_sku != ''){
            if(sku === modelo_sku){
                obj = objetivo
                return obj
            }
        }
    })

    return(
        <Fragment>
            <input id={id} type="text" className={className} name={name} ref={register} value={obj}/>
        </Fragment>
    )
}

export default SpanObjetivo;