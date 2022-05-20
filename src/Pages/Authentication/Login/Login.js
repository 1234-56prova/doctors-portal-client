import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import auth from '../../../firebase.init'
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (gUser || user) {
            return;
        }
    }, []
    )
    let signInErrorMessage;

    if (loading || gLoading) {
        return <Loading></Loading>
    }



    if (error || gError) {
        signInErrorMessage = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                    <p>New to Doctors Portal <Link className='text-primary ' to='/signup'>Create an account?</Link></p>
                    {signInErrorMessage}
                    <p>Forgot Password?</p>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;