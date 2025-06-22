import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/main.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import Blogpost from './pages/Blogs/Blogpost.jsx'
import NotFound from './pages/NotFound.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blogpost />} />
        <Route
          path="*"
          element={<Navigate to="/not-found" replace />}
          />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
