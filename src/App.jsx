import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Kalvium Books</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    </div>
  );
};

export default App;
