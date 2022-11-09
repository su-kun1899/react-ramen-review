import "bulma/css/bulma.css";
import React from "react";
import {App} from "./App";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootPage} from "./pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <RootPage/>,
            }
        ],
    },
]);

createRoot(document.querySelector("#content")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
