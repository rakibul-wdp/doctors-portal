import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Arnob Boyati',
      img: people1,
      location: 'Kalaivita',
      review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, in temporibus quia facere officiis tenetur? Sunt ab laudantium suscipit repellat',
    },
    {
      _id: 2,
      name: 'Omok Tomok',
      img: people2,
      location: 'Uchrong',
      review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, in temporibus quia facere officiis tenetur? Sunt ab laudantium suscipit repellat',
    },
    {
      _id: 3,
      name: 'Borobila',
      img: people3,
      location: 'Kalaivita',
      review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, in temporibus quia facere officiis tenetur? Sunt ab laudantium suscipit repellat',
    },
  ];
  return (
    <section>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-xl font-bold text-secondary'>Testimonial</h3>
          <h2 className='text-4xl'>What Our Patients Says</h2>
        </div>
        <div>
          <img className='w-24 lg:w-48' src={quote} alt='' />
        </div>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
