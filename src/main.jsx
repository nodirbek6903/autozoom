import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <Route path='*' element={<App />} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
)
