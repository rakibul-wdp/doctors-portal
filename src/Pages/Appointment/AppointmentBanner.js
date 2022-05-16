import React, { useState } from 'react';
import background from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className='hero min-h-[50vh]' style={{ backgroundImage: `url(${background})` }}>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={chair} className='max-w-sm rounded-lg shadow-2xl' alt='Dentist Chair' />
        <div className='mr-10'>
          <DayPicker mode='single' selected={date} onSelect={setDate} />
          <p>You have selected: {format(date, 'PP')}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
