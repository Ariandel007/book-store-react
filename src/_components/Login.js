import React from 'react';

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="my-3">
            <div className="row justify-content-center">
                <div class="card col-11 col-sm-8 col-md-7">
                    <div class="card-body">
                        <div className="d-flex justify-content-center mt-3">
                            <h5 class="card-title">Iniciar Sesión</h5>
                        </div>

                        <form>
                            <div className="my-3">
                                <label htmlFor="inputEmail mt-3">Email</label>
                                <input name="email" type="email" class="form-control" id="inputEmail" placeholder="Ingresa tu email"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="InputPassword mt-3">Contraseña</label>
                                <input name="password" type="password" class="form-control" id="InputPassword" placeholder="*******"/>
                            </div>

                            <div className="d-flex justify-content-center mt-3">
                                <button onClick={handleSubmit} className="btn btn-primary" type="submit">Iniciar Sesion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
export default Login;