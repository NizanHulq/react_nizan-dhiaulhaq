import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


import Home from "@/pages/home/home"
import CreateProduct from "@/pages/product/CreateProduct"
import DetailProduct from "@/pages/product/DetailProduct";
import RegistrationPage from "@/pages/register";    
import LoginPage from "@/pages/login";

const options = {
    position: 'top right',
    timeout: 2000,
    offset: '30px',
};

const Router = () => {
    const isLoggedIn = () => {
        const token = "ksbfdskfdks"
        return token
    }

    console.log(isLoggedIn())
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/create",
                element: isLoggedIn() ? <AlertProvider template={AlertTemplate} {...options}>
                    <CreateProduct />
                </AlertProvider> : <Navigate to="/" />
            },
            {
                path: "/product/:id",
                element: isLoggedIn() ? <DetailProduct /> : <Navigate to="/" />
            },
            {
                path: "/register",
                element: <RegistrationPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "*",
                element: <div>404 Not Found</div>
            },
        ]
    )

    return <RouterProvider router={router} />
}

export default Router