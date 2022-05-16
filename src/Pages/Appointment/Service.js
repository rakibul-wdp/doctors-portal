import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className='card lg:max-w-lg bg-base-100 shadow-xl text-center'>
      <div className='card-body'>
        <h2 className='text-center text-secondary font-bold text-xl'>{name}</h2>
        <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date.</span>}</p>
        <p>
          {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
        </p>
        <div className='card-actions justify-center'>
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            for='booking-modal'
            className='btn text-white bg-gradient-to-r from-secondary to-primary'
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
