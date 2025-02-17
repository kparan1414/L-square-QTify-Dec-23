import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

// New Way of routing with a diff cause
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// router object
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
