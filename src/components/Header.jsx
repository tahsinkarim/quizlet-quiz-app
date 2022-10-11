import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className='navbar bg-primary text-primary-content shadow-xl'>
        <div className='container mx-auto'>
          <div className='flex-1'>
            <Link to='/' className='btn btn-ghost normal-case text-xl'>
              Quizlet
            </Link>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal text-sm p-0 sm:text-base'>
              <li>
                <Link className='px-2 sm:px-5' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='px-2 sm:px-5' to='/statistics'>
                  Statistics
                </Link>
              </li>
              <li>
                <Link className='px-2 sm:px-5' to='/blog'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
