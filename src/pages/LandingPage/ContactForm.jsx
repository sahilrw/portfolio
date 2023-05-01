import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="max-w-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-bold mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-white leading-tight bg-gray-800 focus:outline-none focus:border-lime-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-white leading-tight bg-gray-800 focus:outline-none focus:border-lime-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
          rows={5}
        />
      </div>
      <button
        type="submit"
        className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
