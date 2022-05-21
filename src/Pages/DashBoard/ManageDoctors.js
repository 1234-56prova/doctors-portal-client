import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Authentication/Loading/Loading';

const ManageDoctors = () => {

    const { data: doctors, isLoading , refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctor').then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount ){
                toast.success(`Doctor is deleted`);
                refetch();
            }
        })
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(doctor =>
                                <>
                                    <tr>
                                        <th>3</th>
                                        <td>
                                            <div class="avatar">
                                                <div class="w-14 rounded-full">
                                                    <img src={doctor.img} />
                                                </div>
                                            </div>
                                        </td>                                        
                                        <td>{doctor.name}</td>
                                        <td>{doctor.specialty}</td>
                                        <td><button onClick={() => handleDelete(doctor.email)} className="btn btn-xs btn-error">Delete</button></td>
                                    </tr>
                                </>)
                        }
                    </tbody >
                </table >
            </div >        </div >
    );
};

export default ManageDoctors;