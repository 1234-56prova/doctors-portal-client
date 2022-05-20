import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Authentication/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoading , reset} = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))


    const imgStorageKey = '3e8b9e8951ba804c6f713f5a17c4f4ef';

    const onSubmit = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if (result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // send to your database
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if (inserted.insertedId) {
                        toast.success('Doctor added!!!')
                        reset()
                    } 
                    else {
                        toast.error('error')
                    }
                });
            }
            console.log('imgbb', result)
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 bg-base-100 shadow-xl'>
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
                <input className='mb-2 input input-bordered w-full max-w-xs' type='email' {...register('email', {
                    required: {
                        value: true,
                        message: 'Email is required'
                    },
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Provide a valid email'
                    }
                })} />
                <label className='label'>
                    {errors?.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.email.message}</span>}
                    {errors?.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors?.email.message}</span>}
                </label>
                <label htmlFor="">Specialization</label>
                <select class="select input-bordered w-full max-w-xs" {...register('speciality')}>
                    {
                        services.map(service => 
                            <>
                                <option key={service._id} value={service.name}>{service.name}</option>
                            </>
                        )
                    }
                </select>
                
                <label htmlFor="">Profile Picture</label>
                <input className='mb-2 input input-bordered w-full max-w-xs' type='file' {...register('image', {
                    required: {
                        value: true,
                        message: 'Image is required'
                    }
                })} />
                <label className='label'>
                    {errors?.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.email.message}</span>}
                    {errors?.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors?.email.message}</span>}
                </label>
                <input type="submit" className='btn mt-2 w-full' value="Add Doctor" />
            </form>

        </div>
    );
};

export default AddDoctor;