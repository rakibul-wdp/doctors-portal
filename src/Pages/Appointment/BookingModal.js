import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label for='booking-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='font-bold text-xl text-secondary mt-5 mb-3 text-center'>{name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
            <input
              type='text'
              disabled
              value={format(date, 'PP')}
              className='input input-bordered w-full max-w-xs text-lg'
            />
            <select name='slot' className='select select-bordered w-full max-w-xs text-lg'>
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='input input-bordered w-full max-w-xs text-lg'
            />
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='input input-bordered w-full max-w-xs text-lg'
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              className='input input-bordered w-full max-w-xs text-lg'
            />
            <input
              type='submit'
              value='submit'
              className='btn btn-primary w-full max-w-xs text-white font-bold bg-gradient-to-r from-secondary to-primary mb-5 text-lg'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
