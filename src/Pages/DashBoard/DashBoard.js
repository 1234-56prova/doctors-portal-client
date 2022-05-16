import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <h2 className='text-3xl font-bold text-purple-500'>Welcome Dashboard</h2>
    <Outlet />
  </div> 
  <div className="drawer-side">
    <label for="dashboard-sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><Link to='/dashboard'>Appointments</Link></li>
      <li><Link to='/dashboard/review'>My Reviews</Link></li> 
      <li><Link to='/dashboard/history'>My History</Link></li> 
    </ul>
  </div>
</div>
    );
};

export default DashBoard;