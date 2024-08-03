import {createBrowserRouter} from "react-router-dom";
import App from "@/App.jsx";
import React from "react";
import Home from "@/pages/Home/Home.jsx";
import ServicesPage from "@/pages/services/services.jsx";
import ServicePage from "@/pages/service/service.jsx";
import PartnersPage from "@/pages/partners/partners.jsx";
import DeliveryPage from "@/pages/delivery/deliveryPage.jsx";
import About from "@/pages/about/about.jsx";
import Contact from "@/pages/contacts/contact.jsx";

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
                element: <About></About>,
            },
            {
                path: "/service",
                element: <ServicePage></ServicePage>,
            },
            {
                path: "/services",
                element: <ServicesPage></ServicesPage>,
            },
            {
                path: "/partners",
                element: <PartnersPage></PartnersPage>,
            },
            {
                path: "/delivery",
                element: <DeliveryPage></DeliveryPage>,
            },
            {
                path: "/news",
                element: <Home></Home>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
        ]
    },
]);
