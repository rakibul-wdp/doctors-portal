import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery('services', () =>
    fetch('http://localhost:5000/service').then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const imageStorageKey = '9f76d2bc94221bf115c83562c44a744a';

  /***
   * 3 ways to store images
   * 1. Third party storage // Free open public storage is ok for practice project
   * 2. Your own storage in your own server (file system)
   * 3. Database: Mongodb
   *
   * YUP: to validate file: Search: Yup file validation for react hook form
   */
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to your database
          fetch('http://localhost:5000/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success('Doctor added successfully');
                reset();
              } else {
                toast.error('Failed to add the doctor');
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className='text-xl mb-1 font-bold text-center'>Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='w-80 mx-auto'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Your Name'
            className='input input-bordered w-full max-w-xs text-lg'
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.name.message}</span>
            )}
          </label>
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='Your Email'
            className='input input-bordered w-full max-w-xs text-lg'
            {...register('email', {
              required: {
                value: true,
                message: 'Email is Required',
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email',
              },
            })}
          />
          <label className='label'>
            {errors.email?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.email.message}</span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className='label-text-alt text-red-500'>{errors.email.message}</span>
            )}
          </label>
        </div>
        <div className='form-control w-full max-w-xs mb-4'>
          <label className='label'>
            <span className='label-text'>Specialty</span>
          </label>
          <select {...register('specialty')} className='select select-bordered w-full max-w-xs text-lg'>
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Photo</span>
          </label>
          <input
            type='file'
            className='input input-bordered w-full max-w-xs text-lg'
            {...register('image', {
              required: {
                value: true,
                message: 'Image is Required',
              },
            })}
          />
          <label className='label'>
            {errors.image?.type === 'required' && (
              <span className='label-text-alt text-red-500'>{errors.image.message}</span>
            )}
          </label>
        </div>
        <input
          className='w-full max-w-xs btn text-lg uppercase text-white font-bold bg-accent'
          type='submit'
          value='Add'
        />
      </form>
    </div>
  );
};

export default AddDoctor;
