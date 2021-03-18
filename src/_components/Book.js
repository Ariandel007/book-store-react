import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = ({ title, price, urlImg }) => {
    return (
        <Card className="col-6 col-sm-3 col-md-3 col-lg-2 card-border" >
            <Card.Img variant="top" src="https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-md.png"/>
            {/* style={{ width: '5rem' }} Se podria agregar este style al Img pero lo cols ya esta definiendo su ancho*/}
            <Card.Body>
                <Card.Title>Don Quijote de la Mancha</Card.Title>
                <Card.Text>
                    S/. 23
                </Card.Text>
                <div className="row justify-content-around">
                    <Button variant="primary"><FontAwesomeIcon icon={['fas', 'cart-plus']}/></Button>
                    <Button variant="secondary"><FontAwesomeIcon icon={['fas', 'credit-card']}/></Button>
                </div>
            </Card.Body>
        </Card>

    );
}
 
export default Book;