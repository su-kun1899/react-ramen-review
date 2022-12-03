import "bulma/css/bulma.css";
import React from "react";
import {App} from "./App";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootPage} from "./pages/Root";
import {RestaurantListPage} from "./pages/RestaurantList";
import {RestaurantDetailPage} from "./pages/RestaurantDetail";
import {Auth0Provider} from "@auth0/auth0-react";

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
        <Auth0Provider
            domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
            audience={import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE}
            scope="read:current_user update:current_user_metadata"
        >
            <RouterProvider router={router}/>
        </Auth0Provider>
    </React.StrictMode>
);
