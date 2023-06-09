import './App.css';
import Signup from './Signup.js';
import Login from './Login.js';
import Resortusers from './Resortusers.js';
import Yourcomments from './Yourcomments.js';
import CommentCreator from './Commentcreator.js';
import Home from './Home.js';
import Allcomments from './Allcomments.js'
import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/user';
import Navbar from './Navbar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserProvider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/comment-creator" element={<CommentCreator />} />
          <Route path="/your-comments" element={<Yourcomments />} />
          <Route path="/resortusers" element={<Resortusers />} />
          <Route path="/feed" element={<Allcomments />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;



