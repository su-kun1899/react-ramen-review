import "bulma/css/bulma.css";
import React from "react";
import {App} from "./App";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootPage} from "./pages/Root";
import {RestaurantListPage} from "./pages/RestaurantList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <RootPage/>,
            },
            {
                path: "/restaurants",
                element: <RestaurantListPage/>,
            },
        ],
    },
]);

createRoot(document.querySelector("#content")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
