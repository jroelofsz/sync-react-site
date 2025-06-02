import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './pages/NavBar'
import Home from './pages/Home';
import Footer from './pages/Footer';
import About from './pages/About';

function App() {

  return (
    <div className='app-wrapper'>
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
