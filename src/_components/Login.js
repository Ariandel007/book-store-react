import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setUserLogin({
            ...userLogin,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="my-3">
            <div className="row justify-content-center">
                <div className="card col-11 col-sm-8 col-md-7">
                    <div className="card-body">
                        <div className="d-flex justify-content-center mt-3">
                            <h5 className="card-title">Iniciar Sesión</h5>
                        </div>

                        <form>
                            <div className="my-3">
                                <label htmlFor="inputEmail">Email</label>
                                <input name="email" value={userLogin.email} onChange={handleChange} type="email" className="form-control" id="inputEmail" placeholder="Ingresa tu email"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="InputPassword">Contraseña</label>
                                <input name="password" value={userLogin.password} onChange={handleChange} type="password" className="form-control" id="InputPassword" placeholder="*******"/>
                            </div>

                            <div className="d-flex justify-content-center my-3">
                                <button onClick={handleSubmit} className="btn btn-primary" type="submit">Iniciar Sesion</button>
                            </div>

                            <div className="d-flex justify-content-center">
                                <small className="pt-3"><Link to={"/register"}>¿No tienes cuenta? Registrate</Link></small>
                            </div>

                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
export default Login;