import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from 'react-icons/bi'
import BtnGeneral from "../components/BtnGeneral";
import InputQuantity from "../components/InputQuantity";
import { removeItem, updateItemQuantity } from '../store/cartSlice';
import { useState, useEffect } from "react";

export default function Carrito() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [total, setTotal] = useState(0);
    const [cantidadProductos, setCantidadProductos] = useState(0);

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    }

    const totalProducts = () => {
        const sumaPrecios = cartItems.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
        setTotal(sumaPrecios);
    }

    const getTotalProductos = () => {
        const sumaCantidad = cartItems.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
        setCantidadProductos(sumaCantidad);
    }

    const handleChangeItems = (event, id) => {
        const quantity = Number(event.target.value);
        if (quantity > 0 && quantity <= 50)
            dispatch(updateItemQuantity({ id, quantity }));
    }

    useEffect(() => {
        if (cartItems.length > 0) {
            totalProducts();
            getTotalProductos();
        }
    }, [cartItems]);

    return (
        <div className="container">
            <h1 className="h2 mb-8 text-primary">Carrito</h1>
            {cartItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-10">
                    <div className="col-span-2">
                        <div className="overflow-x-scroll md:overflow-x-auto">
                            <table className="border-collapse w-full border border-primary">
                                <thead>
                                    <tr>
                                        <th className="hidden lg:table-cell border border-primary h4 px-8 py-2">Producto</th>
                                        <th className="hidden lg:table-cell border border-primary h4 px-8 py-2">Precio</th>
                                        <th className="hidden lg:table-cell border border-primary h4 px-8 py-2">Cantidad</th>
                                        <th className="hidden lg:table-cell border border-primary h4 px-8 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (

                                        <tr key={index} className="border-b border-primary last:border-b-0">
                                            <td className="border block lg:table-cell lg:border-primary px-4 md:px-8 py-2 p">{item.nombre}</td>
                                            <td className="border block lg:table-cell lg:border-primary px-4 md:px-8 py-2 p">${item.precio}</td>
                                            <td className="border block lg:table-cell lg:border-primary px-4 md:px-8 py-2 p"><InputQuantity id={item.id} handleChange={handleChangeItems} cantidad={item.cantidad} /></td>
                                            <td className="border block lg:table-cell lg:border-primary px-4 md:px-8 py-2 p"><BiTrash onClick={() => handleRemoveItem(item.id)} className="h3 text-red-600 cursor-pointer" /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 md:mt-0">
                        <div className="mb-4">
                            <h3 className="text-primary mb-2">Cantidad de productos:</h3>
                            <p className="text-secondary">{cantidadProductos}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-primary mb-2">Total:</h3>
                            <p className="text-secondary">${total}</p>
                        </div>
                        <BtnGeneral type="Link" text="Comprar" url="/pago" properties="bg-primary mt-6"></BtnGeneral>
                    </div>
                </div>
            ) : (
                <>
                    <h3 className="text-secondary">El carrito esta vacio</h3>
                    <BtnGeneral type="Link" text="Regresar a la tienda" url="/" properties="bg-primary mt-6"></BtnGeneral>
                </>
            )}
        </div>
    );
}