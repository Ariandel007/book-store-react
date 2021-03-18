import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import Book from './Book';

const ListBooks = () => {
    return (
        <Fragment>

        <div className="form-group row my-3 justify-content-between justify-content-md-start">
            <div>
            <div className="d-flex justify-content-center hidenElement"><small>Descendente</small></div>
            <button className="btn btn-primary ml-2"><FontAwesomeIcon icon={['fas', 'chevron-down']}/></button>
            </div>

            <div className="mx-1 mx-md-4">
                <div className="d-flex justify-content-center"><small>Ordenar</small></div>
                <select name="sortBy" className="form-control">
                    <option>Añadidos</option>
                    <option>Precio</option>
                    <option>Titulo</option>
                </select>
            </div>

            <div className="mr-2">
                <div className="d-flex justify-content-center"><small>20 - 300</small></div>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary"><FontAwesomeIcon icon={['fas', 'chevron-left']}/></Button>
                    <Button variant="primary"><FontAwesomeIcon icon={['fas', 'chevron-right']}/></Button>
                </ButtonGroup>
            </div>

        </div>
        
        <h5 className="my-3">Listado de Libros</h5>
        <div className="row">
            <Book/>
            <Book/>
        </div>
        </Fragment>
        
    );
}
 
export default ListBooks;