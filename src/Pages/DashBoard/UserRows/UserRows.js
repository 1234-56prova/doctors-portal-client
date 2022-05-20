import es from 'date-fns/esm/locale/es/index.js';
import React from 'react';
import { toast } from 'react-toastify';

const UserRows = ({ user }) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> {
            if (res.status === 403) {
                toast.error('cant make admin');
            } else {
                res.json();
            }
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                
                toast.success('made an admin!')
            }
        });
    }
    return (
       
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>   
                <td><button className='btn btn-xs'>Remove User</button></td>   
            </tr>
       
    );
};

export default UserRows;