import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ date }) => {
  return (
    <div>
      <h3 className='text-center font-bold text-xl my-20 text-secondary'>
        Available Appointments on {format(date, 'PP')}
      </h3>
    </div>
  );
};

export default AvailableAppointments;
