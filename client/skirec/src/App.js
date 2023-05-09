import './App.css';
import Signup from './Signup.js';
import Login from './Login.js';
import Account from './Account.js';
import Resorts from './Resorts.js';
import Passes from './Passes.js';
import Recommendation from './Recommendation.js';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home({ username }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, {username}!</h1>
        <p>The ski pass recommender</p>
        <body>
          <p>
            <Link to="/signup">Signup:</Link>{' '}
          </p>
          <p>
            <Link to="/login">Login:</Link>{' '}
          </p>
          <p>
            <Link to="/account">View your account:</Link>{' '}
          </p>
          <p>
            <Link to="/your-recommendation">View your recommendation:</Link>{' '}
          </p>
          <p>
            <Link to="/passes">View passes:</Link>{' '}
          </p>
          <p>
            <Link to="/resorts">View resorts:</Link>{' '}
          </p>
        </body>
      </header>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home username={username} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/passes" element={<Passes />} />
        <Route path="/your-recommendation" element={<Recommendation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


