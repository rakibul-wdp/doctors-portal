import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
  return (
    <div className='mt-28 py-16' style={{ backgroundImage: `url(${appointment})` }}>
      <div className='py-10 text-center'>
        <h3 className='font-bold text-xl text-secondary'>Contact Us</h3>
        <h3 className='text-4xl text-white'>Stay connected with us</h3>
      </div>
      <div className='text-center'>
        <input type='text' placeholder='Email Address' className='input w-full max-w-md' />
        <br />
        <input type='text' placeholder='Subject' className='input w-full max-w-md my-5' />
        <br />
        <textarea rows='6' className='textarea w-full max-w-md mb-5' placeholder='Your message'></textarea>
        <br />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
