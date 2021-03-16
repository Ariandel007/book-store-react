import React from 'react';
import Book from './Book';

const MainPage = () => {

    return (
        <div className="my-2">
            <h5 className="my-3">Libros Más Vendidos</h5>
            <div className="row">
                <Book/>
                <Book/>
            </div>
                
            <h5 className="my-3">Añadidos Recientes Populares</h5>
            <div className="row">
                <Book/>
                <Book/>
            </div>
        </div>
    );
}
 
export default MainPage;