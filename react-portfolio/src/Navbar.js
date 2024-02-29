import React from 'react';

function Navbar() {
  return (
    <nav className="nav">
      <button className="nav-button" onClick={() => window.location.href='#about'}>About Me</button>
      <button className="nav-button" onClick={() => window.location.href='#projects'}>Projects</button>
      <button className="nav-button" onClick={() => window.location.href='#contact'}>Contact Me</button>
    </nav>
  );
}

export default Navbar;