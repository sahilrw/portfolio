import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mpzebpaq'); // "mpzebpaq" -> form id from formspree.io
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('email:', email);
    console.log('message:', message);
  }, [email, message]);

  if (state.succeeded) {
    // TODO: Extract this into a seperate card component with some nice styling
    return (
      <>
        <h5>Email sent! Talk to you soon! :D</h5>
        <br />
        <br />
        <h3 className="text-xl font-bold mb-4">Here is a copy of your email: </h3>
        <p>
          <span className="font-bold">email address:</span> {email}
        </p>
        <p>
          <span className="font-bold">message:</span> {message}
        </p>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-bold mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-white leading-tight bg-gray-800 focus:outline-none focus:border-lime-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-white leading-tight bg-gray-800 focus:outline-none focus:border-lime-400"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
