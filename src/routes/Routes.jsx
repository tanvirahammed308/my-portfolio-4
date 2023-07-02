import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";

import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
      ],
    },
  ]);