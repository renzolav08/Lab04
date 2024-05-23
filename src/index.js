import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from "react";
import Header from "./layout/header";
import Main from "./layout/main";
import Aside from "./layout/aside";
import Footer from "./layout/footer";

import {
    createBrowserRouter,
    RouterProvider,
    } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Single from './single';
import Basic from './layout/basic';

    const feather = require('feather-icons');
setTimeout( () =>{
    feather.replace();
}, 1000 );
    
    const router = createBrowserRouter([
            
        {path: "/",
            element: <Basic />,
        },

                {
                    path: "detalle/:slug",
                    element: <Single />,
                },
            ]);
    
const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);