import React,{ Fragment} from 'react';

const style = 'btn btn-danger';
const SPACE = ' ';

const ButtonCloseSesion = ({
    className,
    onClick,
    label
}) =>{
    return(
        <Fragment>
            <button
                className={style + SPACE + className}
                onClick={onClick}>{label}
            </button>
        </Fragment>
    )
}

export default ButtonCloseSesion;