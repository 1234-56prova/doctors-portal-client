import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
              method: 'GET', 
              headers: {
                'content-type': 'application/json'
              }
            })
                .then(res => {
                  return res.json();
                })
                .then(data => setAppointments(data));
        
    })
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
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
          appointments.map(appoinment => <tr>
              <th>{appoinment.patient}</th>
              <td>{appoinment.date}</td>
              <td>{appoinment.slot}</td>
              <td>{appoinment.treatment}</td>
              <td>
                {(appoinment.amountPaid && !appoinment.paid) && <Link to={`/dashboard/payment/${appoinment._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                {(appoinment.amountPaid && appoinment.paid) && <span className='text-success'>Paid</span>}
              </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

            export default MyAppointments;