import { useEffect } from "react";
import { useState } from "react"

const useShoppingCart = () => {
    const [cartItems, setCartItems] = useState(() => {
        const items = localStorage.getItem("cartItems");
        return items ? JSON.parse(items) : [];
    });

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCart) {
            setCartItems(storedCart);
        }
    }, []);

    useEffect(() => {
        console.log(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        let dataCart = {
            "id": item.id,
            "nombre": item.nombre,
            "cantidad": 1
        };
        const itemFind = cartItems.find(c => c.id == item.id);
        if (itemFind != undefined) {
            itemFind.cantidad += 1;
            setCartItems((itemsCurrent) => itemsCurrent.map(c => c.id === item.id ? itemFind : c));
        } else {
            setCartItems(cartItems => [...cartItems, dataCart]);
        }
    };

    // const removeCart = (item) => {
    //     setCartItems((itemsCurrent) => itemsCurrent.filter(c => c.id != item.id));
    // };

    // const clearCart = () => {
    //     setCartItems([]);
    // }

    return { cartItems, addToCart };
}

export default useShoppingCart;