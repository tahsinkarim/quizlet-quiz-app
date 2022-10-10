import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className='navbar bg-primary text-primary-content'>
        <div className='container mx-auto'>
          <div className='flex-1'>
            <Link className='btn btn-ghost normal-case text-xl'>Quizlet</Link>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal p-0'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/statistics'>Statistics</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
