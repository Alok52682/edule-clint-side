import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Navber = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="navbar bg-blue-200 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-extrabold normal-case text-xl">
                    <img src='https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png' className='w-10 rounded-full' alt='Profile' />Edu<span className=' text-blue-500'>Le</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink
                        to='/home'
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? "text-white bg-blue-400" : " text-black")
                        }
                    >Home</NavLink></li>
                    <li><NavLink
                        to='/courses'
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? "text-white bg-blue-400" : " text-black")
                        }
                    >Courses</NavLink></li>

                    <li><NavLink
                        to='/blog'
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? "text-white bg-blue-400" : " text-black")
                        }
                    >Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user?.displayName ?
                        <ul className="menu menu-horizontal gap-2 p-0">
                            <li><Link to='/login' className='btn text-black'>Log In</Link></li>
                            <li><Link to='/register' className='btn text-black'>Register</Link></li>
                        </ul>
                        :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img title={user?.displayName} src={`https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png`} alt='Profile' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        {user?.displayName}
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link>Log Out</Link></li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navber;