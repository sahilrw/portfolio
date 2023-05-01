import React from 'react';
import './ContactBoxCSS.css';

const ContactBox = () => {
  return (
    <div className="w-full items-center flex justify-center bg-black z-20">
      <a href="mailto:sahilrw05@gmail.com">
        <button className="pulse bg-lime-400 text-black px-6 py-3 rounded hover:bg-lime-300 hover:text-black font-bold cursor-pointer">
          Contact me
        </button>
      </a>
    </div>
  );
};

export default ContactBox;
