import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, cUser, cLoading, cError] = useCreateUserWithEmailAndPassword(auth);

  let signInError;
  if (gError || cError) {
    signInError = <p className='mb-3 text-red-500'>{gError?.message || cError?.message}</p>;
  }
  if (gLoading || cLoading) {
    return <Loading />;
  }
  if (gUser || cUser) {
    console.log(gUser, cUser);
  }
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-center text-2xl font-bold'>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Password'
                className='input input-bordered w-full max-w-xs text-lg'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is Required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
              />
              <label className='label'>
                {errors.password?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>{errors.password.message}</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className='label-text-alt text-red-500'>{errors.password.message}</span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className='w-full max-w-xs btn text-lg uppercase text-white font-bold bg-accent'
              type='submit'
              value='Sign Up'
            />
          </form>
          <p className='text-center'>
            <small>
              Already have an account?{' '}
              <Link className='text-secondary' to='/login'>
                Please login
              </Link>
            </small>
          </p>
          <div className='divider'>OR</div>
          <button onClick={() => signInWithGoogle()} className='btn btn-outline text-lg'>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
