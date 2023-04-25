import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Pago from '../pages/Pago'
import Carrito from '../pages/Carrito'
import NotFound from '../pages/NotFound'
import Layout from '../layout'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />
            },
            {
                path: "/carrito",
                element: <Carrito />
            },
            {
                path: "/pago",
                element: <Pago />
            },
        ]
    },
]);