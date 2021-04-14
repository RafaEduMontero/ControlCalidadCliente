import React, {Fragment} from 'react';
import LabelField from '../../atomics/label_fields';
import TextField from '../../atomics/textfield';
import ButtonSend from '../../atomics/button_send';
import '../../styles/login.css';
import PasswordField from '../../atomics/password_field';
import TextFieldLogin from '../../atomics/textfield_login';

const FormularioLogin = ({handler,datos,iniciarSesion}) =>{
    const {usuario,contraseña} = datos;
    return(
        <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">
                    <LabelField label={"Usuario"}/>
                    <TextFieldLogin name="usuario" value={usuario} onChange={handler} className='form-control'/>
                    <br/>
                    <LabelField label={"Contraseña"}/>
                    <br/>
                    <PasswordField name="contraseña" value={contraseña} onChange={handler} className='form-control'/>
                    <br/>
                    <br/>
                    <ButtonSend onClick={iniciarSesion} label="Enviar"/>
                </div>
            </div>
        </div>
    )
}

export default FormularioLogin;