import React,{Fragment  } from 'react';

const PasswordField = ({name,value,className,onChange}) =>{
    return(
        <Fragment>
            <input 
                type="password"
                 name={name}
                 value={value}
                 className={className}
                 onChange={onChange}
            />
        </Fragment>
    )
}

export default PasswordField;