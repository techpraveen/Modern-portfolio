import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import GithubRepos from './components/GithubRepos';
import Achievements from './components/Achievements';
import SpotifyLikedSongs from './components/SpotifyLikedSongs';
import './assets/styles.css';
import Footer from './components/Footer';
   
const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
         <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/github" element={<GithubRepos />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/spotify" element={<SpotifyLikedSongs />} />
             </Routes>
        </div>
        <Footer/>
        </div>
    </Router>
  );
};

export default App;