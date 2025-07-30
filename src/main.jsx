import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/main.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter
} from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Experience from './pages/Experience.jsx'
import NotFound from './pages/NotFound.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Skills from './pages/Skills.jsx'
import Admin from './pages/Admin/Admin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="*"
          element={<Navigate to="/not-found" replace />}
          />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer/>
    </HashRouter>
  </StrictMode>,
)
