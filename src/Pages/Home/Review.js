import React from 'react';

const Review = ({ review }) => {
  return (
    <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
      <div className='card-body'>
        <p className='mb-5'>{review.review}</p>
        <div className='flex items-center'>
          <div className='avatar'>
            <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img src={review.img} alt='' />
            </div>
          </div>
          <div className='ml-5'>
            <h4 className='text-lg font-bold'>{review.name}</h4>
            <h5>{review.location}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
