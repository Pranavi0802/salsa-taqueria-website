import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import MenuCategoryPage from './pages/MenuCategoryPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:categoryId" element={<MenuCategoryPage />} />

        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <footer className="footer">
        <p>© 2025 Salsa Taqueria Halal Restaurant</p>
      </footer>
    </div>
  )
}

export default App
