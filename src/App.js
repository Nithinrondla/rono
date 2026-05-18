import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Blogs from './pages/Blogs';
import News from './pages/News';
import Newsindetail from './pages/Newsindetail';  
import Blogsindetail from './pages/Blogsindetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/news-detail" element={<Newsindetail />} />
          <Route path="/blogs-detail" element={<Blogsindetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
