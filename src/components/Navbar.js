import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Goals</Link>
        </li>
        <li>
          <Link to="/challenges">Challenges</Link>
        </li>
        <li>
          <Link to="/progress">Progress</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
