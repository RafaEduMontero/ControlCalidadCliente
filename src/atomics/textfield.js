import React,{Fragment} from 'react';

const TextField = ({
    name,
    className,
    register,
    disabled
}) => {
    return(
        <Fragment>
            <input 
                type="text"
                name={name}
                className={className}
                disabled={disabled}
                ref={register({required: true})}
            />
        </Fragment>
    )
}

export default TextField;