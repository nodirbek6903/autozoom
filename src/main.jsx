import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "react-query"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <Routes>
    <Route path='*' element={<App />} />
    </Routes>
  </React.StrictMode>
  </QueryClientProvider>
  </BrowserRouter>
)
