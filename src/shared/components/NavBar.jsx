import React, { useEffect, useRef } from 'react';
import scrollToElement from '../utility/scrollToElement';
import Logo from '../icons/Logo';

const Navbar = () => {
  const navbarRef = useRef();

  // useEffect with an empty array works as a onMount function, meaning the code in this block
  // will run when the component is mounted for the first time. The return function provides
  // the disMount functionality and runs whenever the component is unmounted
  // in this case it removes the eventlistener for the scroll event.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add('scrolled');
      } else {
        navbarRef.current.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar fixed top-0 w-full flex items-center justify-between flex-wrap bg-black p-6 z-20">
      <div className="flex items-center flex-shrink-0 text-white mr-12 gap-x-2">
        <Logo />
        <button onClick={() => scrollToElement('home')} className="font-semibold text-2xl mb-0.5 tracking-tight">
          Sahil Dev
        </button>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-base">
          <button
            onClick={() => scrollToElement('home')}
            className="inline-block text-white hover:text-lime-400 mr-4 hover:underline cursor-pointer">
            Home
          </button>
          <button
            onClick={() => scrollToElement('about')}
            className="inline-block text-white hover:text-lime-400 mr-4 hover:underline cursor-pointer">
            About
          </button>
          <button
            onClick={() => scrollToElement('portfolio')}
            className="inline-block text-white hover:text-lime-400 mr-4 hover:underline cursor-pointer">
            Portfolio
          </button>
          <button
            onClick={() => scrollToElement('contact')}
            className="inline-block text-white hover:text-lime-400 mr-4 hover:underline cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
