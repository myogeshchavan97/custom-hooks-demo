import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ cartLength }) => {
  return (
    <div className='header'>
      <ul className='menu-items'>
        <li>
          <NavLink to='/'>Posts</NavLink>
        </li>
        <li>
          <NavLink to='/albums'>Albums</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
      </ul>
      <div>Count: {cartLength}</div>
    </div>
  );
};

export default Header;
