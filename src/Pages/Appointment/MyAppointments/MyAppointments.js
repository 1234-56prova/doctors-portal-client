import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const MyAppointments = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
              method: 'GET', 
              headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
                .then(res => {
                  console.log('res', res);
                  if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/');
                    
                  } 
                  return res.json();
                })
                .then(data => setAppointments(data));
        }
    }, [user])
    
    const accessTo = localStorage.getItem('accessToken');
    console.log(accessTo);
    return (
        <div>
            <h2>My Appointments : {appointments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      {
          appointments.map(appoinment => <tr>
              <th>{appoinment.patient}</th>
              <td>{appoinment.date}</td>
              <td>{appoinment.slot}</td>
              <td>{appoinment.treatment}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

            export default MyAppointments;