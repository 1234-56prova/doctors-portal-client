import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const onSubmit = async data => {
        createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({displayName: data.name})
        navigate('/');
    }

    const [token] = useToken(user || gUser);
    let signInErrorMessage;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (token) {
        console.log(user);
        navigate('/appointment');
    }

    if ( error || gError || updateError) {
        signInErrorMessage = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    return (

        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Name</label>
                        <input name='name' className='mb-2 input input-bordered w-full max-w-xs' type='text' {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            pattern: {
                                value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                                message: 'Provide a valid name'
                            }
                        })} />
                         <label className='label'>
                            {errors?.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.name?.message}</span>}
                            {errors?.name?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors?.name?.message}</span>}
                        </label>
                        <label htmlFor="">Email</label>
                        <input className=' mb-2 input input-bordered w-full max-w-xs' type='email' {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Provide a valid email'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })} />
                        <label className='label'>
                            {errors?.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.email.message}</span>}
                            {errors?.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors?.email.message}</span>}
                        </label>
                        <label for="">Password</label>
                        <input className='input input-bordered w-full max-w-xs' type='password' {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })} />
                        <label className='label'>
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password.message}</span>}
                        </label>
                        <input type="submit" className='btn mt-2 w-full' value="LOGIN" />
                    </form>
                    <p>Already have an account? <Link className='text-primary ' to='/login'>Sign In to your account</Link></p>
                    {signInErrorMessage}
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;