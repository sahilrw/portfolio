import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import ContactForm from './ContactForm'

const EmailConfirm = ({email, message}) => {
  return (
    <>
        <h5>Email sent! Talk to you soon! :D</h5>
        <br />
        <br />
        <div className='bg-gray-800 p-6 rounded-lg'>
            <h3 className="text-xl font-bold mb-4">Here is a copy of your email: </h3>
            <p>
                <span className="font-bold">Email Address:</span> {email}
            </p>
            <p>
                <span className="font-bold">Message:</span>
                    <div className='h-0.5 bg-white'></div>  
                {message}
            </p>
        </div>
      </>
  )
}

export default EmailConfirm