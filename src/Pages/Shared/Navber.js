import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../Contexts/ThemeProvider';
import { AuthContext } from '../../Contexts/UserContext';

const Navber = () => {

    const { user, logOut } = useContext(AuthContext);
    const { light, SetLight } = useContext(ThemeContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log('error', error))
    }

    return (
        <div className={`navbar ${light ? "bg-blue-200" : "bg-blue-900"} sticky top-0 z-10`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink
                            to='/home'
                            className={({ isActive }) =>
                                "nav-link" + (isActive ? "text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
                            }
                        >Home</NavLink></li>
                        <li><NavLink
                            to='/courses'
                            className={({ isActive }) =>
                                "nav-link" + (isActive ? "text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
                            }
                        >Courses</NavLink></li>

                        <li><NavLink
                            to='/blog'
                            className={({ isActive }) =>
                                "nav-link" + (isActive ? "text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
                            }
                        >Blog</NavLink></li>
                        <li><NavLink
                            to='/faq'
                            className={({ isActive }) =>
                                "nav-link" + (isActive ? "text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
                            }
                        >FAQ</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className={`btn btn-ghost font-extrabold normal-case text-2xl ${light ? " text-black" : " text-blue-200"}`}>
                    <img src='https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png' className='w-14 rounded-full' alt='Profile' />Edu<span className=' text-blue-500'>Le</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink
                        to='/home'
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? "text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
                        }
                    >Home</NavLink></li>
                    <li><NavLink
                        to='/courses'
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? "text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
                        }
                    >Courses</NavLink></li>

                    <li><NavLink
                        to='/blog'
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? "text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
                        }
                    >Blog</NavLink></li>
                    <li><NavLink
                        to='/faq'
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? "text-white bg-blue-400" : ` ${light ? " text-black" : " text-blue-200"}`)
                        }
                    >FAQ</NavLink></li>
                </ul>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onChange={() => SetLight(!light)} type="checkbox" className="toggle mr-2" />
                        <span className={`label-text text-black ${light ? " text-black" : " text-blue-200"}`}>{light ? 'Light' : 'Dark'}</span>
                    </label>
                </div>
            </div>
            <div className="navbar-end">
                {
                    !user?.uid ?
                        <Link to='/login' className={`btn btn-ghost ${light ? " text-black" : " text-blue-200"} `}>Log In</Link>
                        :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img title={user?.displayName} src={user?.photoURL ? user?.photoURL : 'https://conference.pecb.com/wp-content/uploads/2017/10/no-profile-picture.jpg'} alt='Profile' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        {user?.displayName}
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link onClick={handleLogOut}>Log Out</Link></li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navber;