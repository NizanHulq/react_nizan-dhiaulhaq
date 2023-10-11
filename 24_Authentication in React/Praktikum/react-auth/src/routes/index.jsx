import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"


import Home from "@/pages/home/home"
import CreateProduct from "@/pages/product/CreateProduct"
import DetailProduct from "@/pages/product/DetailProduct";
import RegistrationPage from "@/pages/register";
import LoginPage from "@/pages/login";
import { useEffect, useState } from "react";

const options = {
    position: 'top right',
    timeout: 2000,
    offset: '30px',
};

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    }, [])

    console.log(isLoggedIn)
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/create",
                element: isLoggedIn ?
                    <CreateProduct /> : <Navigate to="/login" />
            },
            {
                path: "/product/:id",
                element: isLoggedIn ? <DetailProduct /> : <Navigate to="/login" />
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