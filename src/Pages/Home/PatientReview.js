import React from 'react';

const PatientReview = ({ patient }) => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <p className='mb-5'>{patient.description}</p>
        <div className='flex items-center'>
          <div className='avatar'>
            <div className='w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img src={patient.img} alt='' />
            </div>
          </div>
          <div className='ml-5'>
            <h4>{patient.name}</h4>
            <h5>{patient.place}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReview;
