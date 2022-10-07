import React from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Course from './pages/welcome/course'
import Evidence from './pages/evidences/[id]'
import Evidences from './pages/evidences'
import Gallery from './pages/evidences/[id]/gallery'
import Home from './pages'
import Level from './pages/welcome/level'
import Module from './pages/modules/[id]'
import Modules from './pages/modules'
import Name from './pages/welcome/name'
import Welcome from './pages/welcome'
import Writeup from './pages/evidences/[id]/writeup'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>
)
