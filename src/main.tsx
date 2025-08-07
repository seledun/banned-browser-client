import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'

import User from './User.tsx';
import Video from './Video.tsx';
import About from './About.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>    
  </StrictMode>,
)
