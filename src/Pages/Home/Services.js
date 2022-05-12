import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
  const services = [
    {
      _id: 1,
      name: 'Fluoride Treatment',
      description: 'If a dog chews shoes whose shoes does he choose?',
      img: fluoride,
    },
    {
      _id: 2,
      name: 'Cavity Filling',
      description: 'If a dog chews shoes whose shoes does he choose?',
      img: cavity,
    },
    {
      _id: 3,
      name: 'Teeth Whitening',
      description: 'If a dog chews shoes whose shoes does he choose?',
      img: whitening,
    },
  ];
  return (
    <section className='my-28'>
      <div className='text-center mb-10'>
        <h3 className='uppercase font-bold text-secondary text-xl'>Our Services</h3>
        <p className='text-4xl'>Services We Provide</p>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
