import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter, NavLink, RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <div>Home
                    <NavLink to="/employee">Employé</NavLink></div>,
            },
            {
                path: "employee",
                element: <div>
                    Employee
                    <NavLink to="/">Home</NavLink>
                </div>,
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
