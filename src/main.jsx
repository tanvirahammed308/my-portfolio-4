import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='bg-green-600'>
     <RouterProvider router={router} />

     </div>
  </React.StrictMode>,
)
