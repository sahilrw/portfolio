import React from 'react';
import './ContactBoxCSS.css';

const ContactBox = () => {
  return (
    <div className="w-full items-center flex justify-center bg-black">
      <a href="mailto:sahilrw05@gmail.com">
        <button className="pulse bg-teal-600 text-white px-6 py-3 rounded hover:bg-lime-400 hover:text-black font-bold cursor-pointer">
          Contact me
        </button>
      </a>
    </div>
  );
};

export default ContactBox;
