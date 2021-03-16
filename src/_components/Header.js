import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const sideNavRef = React.useRef();

    const openSideNav = () => sideNavRef.current.style.width = "250px";
    const closeSideNav = () => sideNavRef.current.style.width = "0px";


    return (
        <Fragment>
            <div className="header-bar">
                <div className="container">

                    <div className="row justify-content-between">


                        <div className="col-2">
                            <h2 onClick={openSideNav} className="header-title"><FontAwesomeIcon icon={['fas', 'bars']}/></h2>                     
                        </div>

                        <div className="col-10">
                            <h1 className="header-title"><FontAwesomeIcon icon={['fas', 'book']}/>Bookstore</h1>
                        </div>

                        <div className="col-12">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control col-10" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button className="col-2 primary-button" type="submit"><FontAwesomeIcon icon={['fas', 'search']}/></button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

            <div id="mySidenav" class="sidenav" ref={sideNavRef}>
                <Link onClick={closeSideNav} className="closebtn" >&times;</Link>
                <Link className="header-title">Iniciar Sesión</Link>
                <Link className="header-title">Ofertas</Link>
                <Link className="header-title">Todos los libros</Link>
                <Link className="header-title"><button className="primary-button">Suscribirse</button></Link>
            </div>
                
        </Fragment>
        
    );
}
 
export default Header;