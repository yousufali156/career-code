import React, { use } from 'react';
import { NavLink } from 'react-router';
import AuthContext from '../../../FirebaseAuthContext/AuthContext';

const Navbar = () => {
    const {user,signOutUser} = use(AuthContext);

    const handleSignOut=() =>{
        signOutUser()
        .then(() =>{
            console.log('Signed Out User')
        })
        .catch( error =>{
            console.log(error)
        })
    }

    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user? <button onClick={handleSignOut} className='btn'>Sign Out</button> :
                        <>
                            <NavLink to="register">Register</NavLink>
                            <NavLink to="signin">Sign In</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;