import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }

    const menuItems = <>
            <li><Link className='text-decoration-none' to='/'>Home</Link></li>
            <li><Link className='text-decoration-none' to='/appointment'>Appointment</Link></li>
            <li><Link className='text-decoration-none' to='/reivew'>Review</Link></li>
            <li><Link className='text-decoration-none' to='/contact'>Contact</Link></li>
            <li><Link className='text-decoration-none' to='/about'>About</Link></li>
            <li>{user ? <Link className='text-decoration-none' onClick={logOut} to='/'>Logout</Link> : <Link className='text-decoration-none' to='/login'>Login</Link> }</li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href='/'>Doctors Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;