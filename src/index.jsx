import React from 'react'

import { createRoot } from 'react-dom/client'
import { MemoryRouter, Route, Routes } from 'react-router'

import Home from './pages'
import Evidences from './pages/evidences'
import Evidence from './pages/evidences/[id]'
import Modules from './pages/modules'
import Module from './pages/modules/[id]'

import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:id" element={<Module />} />
        <Route path="/evidences" element={<Evidences />} />
        <Route path="/evidences/:id/*" element={<Evidence />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
)
