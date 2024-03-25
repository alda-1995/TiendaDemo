import React from 'react'
import BtnGeneral from '../components/BtnGeneral';
import ListProducts from '../components/ListProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { removeAll } from '../store/cartSlice';

export default function Pago() {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleResetItems() {
        dispatch(removeAll())
        navigate("/");
    }
    return (
        <div className="container">
            <div className="max-w-[600px] mx-auto flex flex-col items-center text-center">
                {
                    cartItems.length > 0 ? (
                        <>
                            <h2 className="text-secondary mb-4">Gracias por comprar</h2>
                            <h3 className='text-primary'>Recibiras tus productos en unos días</h3>
                            <div className='my-8'>
                                <ListProducts items={cartItems} />
                            </div>
                            <BtnGeneral type="button" text="Regresar" action={handleResetItems}  properties="bg-primary mt-6" />
                        </>
                    ) : (
                        <p className='text-secondary mt-6 h2'>No existe el pago.</p>
                    )
                }


            </div>
        </div>
    );
}