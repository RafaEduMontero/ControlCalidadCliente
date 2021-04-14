import React,{Fragment} from 'react';

const TextFieldLogin = ({
    name,
    className,
    onChange,
    value
}) => {
    return(
        <Fragment>
            <input 
                type="text"
                name={name}
                className={className}
                onChange={onChange}
                value={value}
            />
        </Fragment>
    )
}

export default TextFieldLogin;