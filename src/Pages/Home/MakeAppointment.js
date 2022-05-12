import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center mb-28'>
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-100px]' src={doctor} alt='' />
      </div>
      <div className='flex-1 sm:p-20 lg:p-0'>
        <h3 className='text-xl text-secondary mb-3 font-bold'>Appointment</h3>
        <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
        <p className='text-white my-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti itaque culpa dolore velit eveniet
          placeat sit accusantium beatae ut ad, repellendus harum molestias consectetur nisi sunt. Accusantium quae
          doloribus pariatur ipsum quaerat, soluta enim consequuntur in labore modi quibusdam?
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
