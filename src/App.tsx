import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './pages/NavBar'
import Home from './pages/Home';
import Scripts from './pages/Scripts';
import Footer from './pages/Footer';

function App() {

  return (
    <div className='app-wrapper bg-dark'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scripts" element={<Scripts />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
