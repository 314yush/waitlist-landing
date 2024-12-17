import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.location.href = "https://app.deform.cc/form/83ae6a90-7d88-4932-981b-ce2f1d76dc20";
  };

  return (
    <>
      <nav className="nav">
        <div><a href="/" className="logo">gohigher.life</a></div>
        <div>
          <a href="/about">about</a>
          <a href="/follow">follow</a>
        </div>
      </nav>
      <div className="container">
        <h1>Earn ↑ for every steps</h1>
        <button onClick={handleClick}>Join Waitlist</button>
      </div>
    </>
  );
}

export default App;
