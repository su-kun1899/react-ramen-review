import "bulma/css/bulma.css";
import React from "react";
import {App} from "./App";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootPage} from "./pages/Root";
import {RestaurantListPage} from "./pages/RestaurantList";
import {RestaurantDetailPage} from "./pages/RestaurantDetail";

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
            {
                path: "/restaurants/:restaurantId",
                element: <RestaurantDetailPage/>,
            },
        ],
    },
]);

createRoot(document.querySelector("#content")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
