import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import SnippetView from './pages/SnippetView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/snippet/:id" element={<SnippetView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)