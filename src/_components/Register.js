import React, { useState } from 'react';

const Register = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    const [userRegister, setUserRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: 18,
        address: ''
    });

    const handleRegister = e => {
        switch (e.target.name) {
            case 'firstName':
            case 'lastName':
            case 'email':
            case 'password':
            case 'address':

                applyChangeInUserRegister(e.target.name, e.target.value);
                break;
            case 'age':
                const age = Number.parseInt(e.target.value);
                if (Number.isInteger(age)) {
                    applyChangeInUserRegister(e.target.name, age);
                }
                break;
        
            default:
                break;
        }
    }

    const applyChangeInUserRegister = (attributeName, value) => {
        setUserRegister({
            ...userRegister,
            [attributeName]: value
        });
    }

    return (
        <div className="my-3">
            <div className="row justify-content-center">
                <div className="card col-11 col-sm-8 col-md-7">
                    <div className="card-body">
                        <div className="d-flex justify-content-center mt-3">
                            <h5 className="card-title">Registro de Usuario</h5>
                        </div>

                        <form>
                            <div className="my-3">
                                <label htmlFor="inputfirstName">Nombres</label>
                                <input name="firstName" onChange={handleRegister} value={userRegister.firstName} type="text" className="form-control" id="inputfirstName" placeholder="Ingresa tus Nombres"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="inputlastName">Apellidos</label>
                                <input name="lastName" onChange={handleRegister} value={userRegister.lastName} type="text" className="form-control" id="inputlastName" placeholder="Ingresa tus Apellidos"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="inputEmail">Email</label>
                                <input onChange={handleRegister} value={userRegister.email} name="email" type="email" className="form-control" id="inputEmail" placeholder="Ingresa tu email"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="InputPassword">Contraseña</label>
                                <input onChange={handleRegister} value={userRegister.password} name="password" type="password" className="form-control" id="InputPassword" placeholder="*******"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="inputAge">Edad</label>
                                <input onChange={handleRegister} value={userRegister.age} name="age" type="text" className="form-control" id="inputAge" placeholder="Ingresa tu edad"/>
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
 
export default Register;