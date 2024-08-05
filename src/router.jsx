import {createBrowserRouter} from "react-router-dom";
import App from "@/App.jsx";
import React from "react";
// import Home from "@/pages/Home/Home.jsx";
// import ServicesPage from "@/pages/services/services.jsx";
// import ServicePage from "@/pages/service/service.jsx";
// import PartnersPage from "@/pages/partners/partners.jsx";
// import DeliveryPage from "@/pages/delivery/deliveryPage.jsx";
// import About from "@/pages/about/about.jsx";
// import Contact from "@/pages/contacts/contact.jsx";
import {lazy, Suspense} from "react";

const Home = lazy(() => import('@/pages/Home/Home.jsx'));
const ServicesPage = lazy(() => import('@/pages/services/services.jsx'));
const ServicePage = lazy(() => import('@/pages/service/service.jsx'));
const PartnersPage = lazy(() => import('@/pages/partners/partners.jsx'));
const DeliveryPage = lazy(() => import('@/pages/delivery/deliveryPage.jsx'));
const About = lazy(() => import('@/pages/about/about.jsx'));
const Contact = lazy(() => import('@/pages/contacts/contact.jsx'));

const Loading = () => <h1>Loading...</h1>

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/service",
                element: (
                    <Suspense fallback={<Loading />}>
                        <ServicePage />
                    </Suspense>
                ),
            },
            {
                path: "/services",
                element: (
                    <Suspense fallback={<Loading />}>
                        <ServicesPage />
                    </Suspense>
                ),
            },
            {
                path: "/partners",
                element: (
                    <Suspense fallback={<Loading />}>
                        <PartnersPage />
                    </Suspense>
                ),
            },
            {
                path: "/delivery",
                element: (
                    <Suspense fallback={<Loading />}>
                        <DeliveryPage />
                    </Suspense>
                ),
            },
            {
                path: "/news",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Contact />
                    </Suspense>
                ),
            },
        ],
    },
]);