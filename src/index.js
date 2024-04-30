import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Single from './single';
import Basic from './layout/basic';

import {
    createBrowserRouter,
    RouterProvider,
    } from "react-router-dom";
import { createRoot } from 'react-dom/client';

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