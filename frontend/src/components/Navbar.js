import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/team-analysis">Team Analysis</Link>
    </nav>
  );
};

export default Navbar;