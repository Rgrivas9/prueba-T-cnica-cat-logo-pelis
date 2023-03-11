import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import { PageContextProvider } from './context/page.Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
          </Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
