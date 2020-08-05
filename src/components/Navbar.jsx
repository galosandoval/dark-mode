import React, { useState } from 'react';
import useDarkMode from '../components/hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode();
  console.log(darkMode)
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
