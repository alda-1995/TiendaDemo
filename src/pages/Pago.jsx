import React, { Component } from 'react'
import BtnGeneral from '../components/BtnGeneral';

class Pago extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="max-w-[600px] mx-auto flex flex-col items-center text-center">
                    <h2 className="text-secondary mb-4">Gracias por comprar</h2>
                    <h3 className='text-primary'>Recibiras tus productos en unos días</h3>
                    <BtnGeneral type="Link" text="Regresar" url="/" properties="bg-primary mt-6"/>
                </div>
            </div>
        );
    }
}

export default Pago;