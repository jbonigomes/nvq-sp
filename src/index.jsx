import React from 'react'

import { createRoot } from 'react-dom/client'
import { MemoryRouter, Route, Routes } from 'react-router'

import Home from './pages'
import Evidences from './pages/evidences'
import Evidence from './pages/evidences/[id]'
import Gallery from './pages/evidences/[id]/gallery'
import Writeup from './pages/evidences/[id]/writeup'
import Modules from './pages/modules'
import Module from './pages/modules/[id]'
import Welcome from './pages/welcome'
import Course from './pages/welcome/course'
import Level from './pages/welcome/level'
import Name from './pages/welcome/name'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/welcome/name" element={<Name />} />
        <Route path="/welcome/level" element={<Level />} />
        <Route path="/welcome/course" element={<Course />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:id" element={<Module />} />
        <Route path="/evidences" element={<Evidences />} />
        <Route path="/evidences/:id" element={<Evidence />} />
        <Route path="/evidences/:id/gallery" element={<Gallery />} />
        <Route path="/evidences/:id/writeup" element={<Writeup />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
)
