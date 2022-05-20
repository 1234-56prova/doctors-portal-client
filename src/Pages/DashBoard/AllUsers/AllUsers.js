import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Authentication/Loading/Loading';
import UserRows from '../UserRows/UserRows';

const AllUsers = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization :  `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRows key={user._id} user={user}></UserRows>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;