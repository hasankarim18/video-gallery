import React, { useEffect } from 'react';
import { fetchVideos } from './features/Videos/VideosSlice';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (

    <BrowserRouter>
      <Navbar />
      react-rtk
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
