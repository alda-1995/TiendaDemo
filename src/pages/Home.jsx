import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productSlice';
import CardProducto from '../components/CardProducto';
import { addItem } from '../store/cartSlice';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Home() {
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.productos.products)
    const status = useSelector((state) => state.productos.status);
    const error = useSelector((state) => state.productos.error);

    function handleAddItem(item) {
        dispatch(addItem(item))
        withReactContent(Swal).fire({
            position: "top-end",
            icon: "success",
            title: "Se agrego correctamente el producto.",
            showConfirmButton: false,
            timer: 1500
        })
    }

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    return (
        <div className="container">
            <h2 className='mb-10 text-primary'>Productos</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 xl:gap-6'>
                {productos.map(p => {
                    return <CardProducto addAction={handleAddItem} key={p.id} {...p} />
                })}
            </div>
        </div>
    );
}