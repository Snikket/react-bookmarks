import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts from './routes/Posts'
import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <Posts/>}, //our domain/
  {path: '/create-post', element: <h1>hello</h1>}

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)
