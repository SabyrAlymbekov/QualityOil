import {createBrowserRouter} from "react-router-dom";
import App from "@/App.jsx";
import React from "react";
import Home from "@/pages/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <Home></Home>,
            },
            {
                path: "/service",
                element: <Home></Home>,
            },
            {
                path: "/services",
                element: <Home></Home>,
            },
            {
                path: "/partners",
                element: <Home></Home>,
            },
            {
                path: "/delivery",
                element: <Home></Home>,
            },
            {
                path: "/news",
                element: <Home></Home>,
            },
            {
                path: "/contacts",
                element: <Home></Home>,
            },
        ]
    },
]);
