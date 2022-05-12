import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
  return (
    <section className='my-20'>
      <div className='text-center mb-10'>
        <h3 className='uppercase font-bold text-secondary text-lg'>Our Services</h3>
        <p className='text-4xl'>Services We Provide</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <Service img={fluoride} cardTitle={'Fluoride Treatment'} />
        <Service img={cavity} cardTitle={'Cavity Filling'} />
        <Service img={whitening} cardTitle={'Teeth Whitening'} />
      </div>
    </section>
  );
};

export default Services;
