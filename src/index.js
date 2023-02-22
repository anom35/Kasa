import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles/index.css';
import App from './components/App';
import Error404 from './components/Error404';
import About from './components/About';
import Logement from './components/Logement';


// création de la constante router et des paramètres de lancement
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/logements",
      element: <Logement />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/error",
      element: <Error404 />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // utilisation du routeur
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


// reportWebVitals();
