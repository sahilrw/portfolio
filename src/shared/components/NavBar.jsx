import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-12">
        <span className="font-semibold text-xl tracking-tight">My Portfolio</span>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-sm">
          <a href="#home" className="block mt-4 inline-block text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#about" className="block mt-4 inline-block text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#contact" className="mt-4 inline-block text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
