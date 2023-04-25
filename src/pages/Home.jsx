import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productSlice';
import CardProducto from '../components/CardProducto';
import { addItem } from '../store/cartSlice'; 

export default function Home() {
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.productos.products)
    const status = useSelector((state) => state.productos.status);
    const error = useSelector((state) => state.productos.error);

    function handleAddItem(item){
        dispatch(addItem(item))
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