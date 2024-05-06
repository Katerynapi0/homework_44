import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserListPage from './UserListPage';
import AlbumListPage from './AlbumListPage';
import PhotoListPage from './PhotoListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/albums" element={<AlbumListPage />} />
        <Route path="/photos" element={<PhotoListPage />} />
      </Routes>
    </Router>
  );
}

export default App;