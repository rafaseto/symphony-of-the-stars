import React from 'react';
import ImageUploader from './components/ImageUploader';
import ImageList from './components/Imagens';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import './components/ImageList.css'
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<ImageUploader />} />
                <Route path="/api" element={<ImageList />} />
            </Routes>
        </Router>
    );
}

export default App;
