import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();
    const sideNavRef = React.useRef();

    const openSideNav = () => sideNavRef.current.style.width = "250px";
    const closeSideNav = () => sideNavRef.current.style.width = "0px";

    const goToMainPage = () => history.push('/');

    return (
        <Fragment>
            <div className="header-bar py-3">
                <div className="container">

                    <div className="row justify-content-between">


                        <div className="col-2 hide-in-desktop">
                            <h2 onClick={openSideNav} className="header-title"><FontAwesomeIcon icon={['fas', 'bars']}/></h2>                     
                        </div>

                        <div className="col-7 col-lg-3">
                            <h1 onClick={goToMainPage} className="header-title"><FontAwesomeIcon icon={['fas', 'book']}/>Readct</h1>
                        </div>

                        <div className="col-8 hide-in-mobile">
                            <Link className="header-title mr-4" to={'/login'}>Iniciar Sesión</Link>
                            <Link className="header-title mr-4" to={'/offers'}>Ofertas</Link>
                            <Link className="header-title mr-4" to={'/list-books'}>Todos los libros</Link>
                            <Link className="header-title" to={'/subscribe'}><button className="btn btn-secondary">Suscribirse</button></Link>
                        </div>

                        <div className="col-3 col-lg-1">
                            <h2 className="header-title"><FontAwesomeIcon icon={['fas', 'shopping-cart']}/><span className="shoping-cart-items">(0)</span></h2>                     
                        </div>

                        <div className="col-12">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control col-10" type="text" placeholder="Search"/>
                                <button className="col-2 btn btn-secondary" type="submit"><FontAwesomeIcon icon={['fas', 'search']}/></button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

            <div id="mySidenav" className="sidenav hide-in-desktop" ref={sideNavRef}>
                <a onClick={closeSideNav} className="closebtn" >&times;</a>
                <Link className="header-title" to={'/login'} onClick={closeSideNav}>Iniciar Sesión</Link>
                <Link className="header-title" to={'/offers'} onClick={closeSideNav}>Ofertas</Link>
                <Link className="header-title" to={'/list-books'} onClick={closeSideNav}>Todos los libros</Link>
                <Link className="header-title" to={'/subscribe'} onClick={closeSideNav}><button className="btn btn-secondary">Suscribirse</button></Link>
            </div>
                
        </Fragment>
        
    );
}
 
export default Header;