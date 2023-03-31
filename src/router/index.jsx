import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Pago from '../pages/Pago'
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
                path: "/pago",
                element: <Pago />
            },
        ]
    },
]);